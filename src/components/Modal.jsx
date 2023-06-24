import React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

import {KPI} from '../app/constParamsObj';

import { useSelector, useDispatch } from 'react-redux'
import { setModalFalse } from '../features/ModalSlice'
import { setFormValues, clearFormValues } from '../features/FormValuesSlice';
import { setCards } from '../features/CardsSlice';

export default function Modal() {

    const cards = useSelector(state => state.cards.value)
    const modal = useSelector(state => state.modal.value)
    const formValues = useSelector(state => state.formValues.value)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const nameOfForm = event.target.id;
        const value = event.target.value;
        dispatch(setFormValues({
            ...formValues,
            [nameOfForm]: value
        }))
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const kpiValues = KPI(formValues)
        dispatch(setCards([
            ...cards,
            {
            ...formValues,
            ...kpiValues,
            }
        ].sort((a,b) => a.title.localeCompare(b.title))))
        localStorage.setItem(formValues.id, JSON.stringify({...formValues, ...kpiValues}))
        console.log(JSON.parse(localStorage.getItem(formValues.id)))
        dispatch(clearFormValues())
    }

    const handleClose = () => {
        dispatch(setModalFalse());
    }

    return (
        <Dialog open={modal} onClose={handleClose}>
            <DialogTitle>Добавление Сотрудника</DialogTitle>
            <form onSubmit={submitHandler}>
                <DialogContent>
                    <DialogContentText>
                        Пожалуйста, заполните следующие формы.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        id="title"
                        margin="dense"
                        label="Фамилия и имя"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange} />
                    <TextField
                        margin="dense"
                        id="status"
                        label="Должность"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange} />
                    <TextField
                        margin="dense"
                        id="averageCheck"
                        label="Средний чек"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange} />
                    <TextField
                        margin="dense"
                        id="conversion"
                        label="Конверсия"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange} />
                    <TextField

                        margin="dense"
                        id="profitByMetter"
                        label="Прибыль с каждого погонного метра стеллажей"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange}
                    />
                    <TextField

                        margin="dense"
                        id="countOfReturns"
                        label="Количество возвратов"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange}
                    />
                    <TextField

                        margin="dense"
                        id="averageRevenuePerSale"
                        label="Средняя выручка за одну продажу"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange}
                    />
                    <TextField

                        margin="dense"
                        id="countOfSales"
                        label="Количество продаж"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="countOfPositivComments"
                        label="Количество положительных отзывов"
                        type="number"
                        fullWidth
                        variant='outlined'
                        onChange={handleChange}

                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Закрыть</Button>
                    <Button type='submit' onClick={handleClose}>Добавить</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}