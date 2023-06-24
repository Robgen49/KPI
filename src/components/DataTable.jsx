import React from 'react';
import { constParamsObj, KPI } from '../app/constParamsObj';
import { DataGrid } from '@mui/x-data-grid';


const DataTable = ({ user }) => {
    let data = JSON.parse(localStorage.getItem(user.id))

    const getKpi = params => {
        return Math.round(params.row.weight * +params.row.completed / params.row.plan)
    }

    const columns = [
        { field: 'id', headerName: 'Показатель', width: 400, headerClassName: 'super-app-theme--header', },
        { field: 'weight', headerName: 'Вес', width: 100, headerClassName: 'super-app-theme--header', headerAlign: 'center', align: 'center' },
        { field: 'plan', headerName: 'План', width: 100, headerClassName: 'super-app-theme--header', headerAlign: 'center', align: 'center' },
        { field: 'completed', headerName: 'Фактический результат', width: 250, headerClassName: 'super-app-theme--header', headerAlign: 'center', align: 'center', editable: true, },
        { field: 'kpi', headerName: 'KPI', width: 100, headerClassName: 'super-app-theme--header', headerAlign: 'center', align: 'center', valueGetter: getKpi},
    ];

    const rows = [
        { id: 'Средний чек', weight: constParamsObj.averageCheckWegiht, plan: constParamsObj.averageCheckPlan, completed: +user.averageCheck, },
        { id: 'Конверсия', weight: constParamsObj.conversionWeight, plan: constParamsObj.conversionPlan, completed: +user.conversion },
        { id: 'Прибыль с каждого погонного метра стеллажей', weight: constParamsObj.profitByMetterWeight, plan: constParamsObj.profitByMetterPlan, completed: +user.profitByMetter },
        { id: 'Количество возвратов', weight: constParamsObj.countOfReturnsWeight, plan: constParamsObj.countOfReturnsPlan, completed: +user.countOfReturns },
        { id: 'Средняя выручка за одну продажу', weight: constParamsObj.averageRevenuePerSaleWeight, plan: constParamsObj.averageRevenuePerSalePlan, completed: +user.averageRevenuePerSale },
        { id: 'Количество продаж', weight: constParamsObj.countOfSalesWeight, plan: constParamsObj.countOfSalesPlan, completed: +user.countOfSales, },
        { id: 'Число положительных отзывов', weight: constParamsObj.countOfPositivCommentsWeight, plan: constParamsObj.countOfPositivCommentsPlan, completed: +user.countOfPositivComments },
    ];

    return (
        <div style={{ Width: '100%' }}>
            <DataGrid
                sx={{
                    color: 'secondary.main',
                    fontSize: 16,
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                    '& .super-app-theme--header': {
                        color: 'primary.main',
                        fontSize: 20,
                    },
                    '& .super-app-theme--error': {
                        backgroundColor: 'secondary.error'
                    },
                }}
                rows={rows}
                columns={columns}
                checkboxSelection={false}
                pageSizeOptions={[]}

                getRowClassName={(params) =>
                    +params.row.completed < +params.row.plan ? 'super-app-theme--error' : ''
                }

                autoHeight
                processRowUpdate={(updatedRow, originalRow) => {
                    console.log(updatedRow);
                    switch (updatedRow.id) {
                        case 'Средний чек':
                            data.averageCheck = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Конверсия':
                            data.conversion = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Прибыль с каждого погонного метра стеллажей':
                            data.profitByMetter = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Количество возвратов':
                            data.countOfReturns = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Средняя выручка за одну продажу':
                            data.averageRevenuePerSale = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Количество продаж':
                            data.countOfSales = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        case 'Число положительных отзывов':
                            data.countOfPositivComments = +updatedRow.completed
                            data = { ...data, ...KPI(data) }
                            break
                        default:
                            break;
                    }
                    localStorage.setItem(data.id, JSON.stringify(data))
                    return updatedRow
                }}
                onProcessRowUpdateError={(err) => console.log(err)}
                disableColumnMenu
                disableRowSelectionOnClick

                onEditCellChangeCommitted
                editMode='row'
            />
        </div>
    );
};

export default DataTable;