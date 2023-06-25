import { Container, Typography, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CardItem from '../components/CardItem'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCards } from '../features/CardsSlice';
import Modal from '../components/Modal';
import Header from '../components/Header'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Cards = () => {
    const cards = useSelector(state => state.cards.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const getCards = () => {
            let cardsArray = []
            for (const key in localStorage) {
                if (!localStorage.hasOwnProperty(key)) {
                    continue
                }
                console.log(JSON.parse(localStorage.getItem(key)).id)
                console.log(JSON.parse(localStorage.getItem(key)).title)
                console.log('\n')
                cardsArray.push(JSON.parse(localStorage.getItem(key)))
            }
            cardsArray.sort((a, b) => a.title.localeCompare(b.title))
            dispatch(setCards(cardsArray))
        }
        getCards()
    }, [])

    return (
        <Container sx={{ mt: 10, mb: 1, }}>
            <Header />
            <Modal />
            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cards.map((card, i) =>
                    <Grid2 xs={2} sm={4} md={4} key={i}>
                        <CardItem
                            id={card.id}
                            title={card.title}
                            status={card.status}
                            kpi={card.kpi}>
                        </CardItem>
                    </Grid2>
                )}
                {cards.length === 0 &&
                    <>
                        <Box width={'100%'} textAlign={'center'}>
                            <ErrorOutlineIcon sx={{ mt: 10, height: '10vw', width: '10vw' }} />
                        </Box>
                        <Box width={'100%'} textAlign={'center'}>
                            <Typography
                                color={'secondary'}
                                fontSize={'2.3vw'}
                                fontWeight={'bold'}
                                sx={{userSelect: 'none'}}
                            >
                                Сотрудники не найдены.
                                Добавьте сотрудника!
                            </Typography>
                        </Box>
                    </>
                }
            </Grid2>
        </Container>
    );
};

export default Cards;