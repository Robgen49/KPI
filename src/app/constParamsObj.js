export const constParamsObj = {
    averageCheckPlan: 1000,
    averageCheckWegiht: 30,
    conversionPlan: 20,
    conversionWeight: 15,
    profitByMetterPlan: 30,
    profitByMetterWeight: 10,
    countOfReturnsPlan: 3,
    countOfReturnsWeight: 10,
    averageRevenuePerSalePlan: 1300,
    averageRevenuePerSaleWeight: 5,
    countOfSalesPlan: 220,
    countOfSalesWeight: 25,
    countOfPositivCommentsPlan: 8,
    countOfPositivCommentsWeight: 5,
}
const kpiCount = (obj) => (
    {
        averageCheckKpi: Math.round(constParamsObj.averageCheckWegiht*(+obj.averageCheck)/constParamsObj.averageCheckPlan),
        conversionKpi: Math.round(constParamsObj.conversionWeight*(+obj.conversion)/constParamsObj.conversionPlan),
        profitByMetterKpi: Math.round(constParamsObj.profitByMetterWeight*(+obj.profitByMetter)/constParamsObj.profitByMetterPlan),
        countOfReturnsKpi: Math.round(constParamsObj.countOfReturnsWeight*(+obj.countOfReturns)/constParamsObj.countOfReturnsPlan),
        averageRevenuePerSaleKpi: Math.round(constParamsObj.averageRevenuePerSaleWeight*(+obj.averageRevenuePerSale)/constParamsObj.averageRevenuePerSalePlan),
        countOfSalesKpi: Math.round(constParamsObj.countOfSalesWeight*(+obj.countOfSales)/constParamsObj.countOfSalesPlan),
        countOfPositivCommentsKpi: Math.round(constParamsObj.countOfPositivCommentsWeight*(+obj.countOfPositivComments)/constParamsObj.countOfPositivCommentsPlan)
    }
)

export const KPI = (obj) => {
    const kpiObj = kpiCount(obj);
    const kpi = Object.values(kpiObj).reduce((a,b) => a + b, 0);
    return {
        ...kpiObj,
        kpi: kpi
    }
}