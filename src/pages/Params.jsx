import React, { useEffect } from 'react';
import { Container, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ParamsTitle from '../components/ParamsTitle';
import DataTable from '../components/DataTable';
import SummarizeIcon from '@mui/icons-material/Summarize';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCards } from '../features/CardsSlice';

const Params = () => {

    const dispatch = useDispatch()

    let cardsArray = []
    useEffect(() => {
        for (const key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue
            }
            cardsArray.push(JSON.parse(localStorage.getItem(key)))
        }
        dispatch(setCards(cardsArray))
    }, [])

    const userId = useParams()['*'];
    const user = JSON.parse(localStorage.getItem(userId))

    return (
        <>
            <ParamsTitle props={user} ></ParamsTitle>
            <Container sx={{ mt: 3, mb: 1 }}>
                <DataTable user={user} />
                <Link to={'/cards'}>
                    <Button sx={{ mt: 3, fontWeight: 900, color: 'grey' }} variant='outlined' color='primary' size='large' startIcon={<SummarizeIcon />}>К списку</Button>
                </Link>
            </Container>
        </>
    );
};

export default Params;