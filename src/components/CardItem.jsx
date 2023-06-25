import * as React from 'react';
import { Tooltip, Grid, Avatar, Typography, Button, Box, CardContent,CardActions, Card } from '@mui/material';

import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { Link } from 'react-router-dom'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { setCards } from '../features/CardsSlice';
import { setDeleteAlertTrue, setDeleteAlertFalse } from '../features/DeleteAlertSlice';
import DeleteAlert from './DeleteAlert';
import { setIdToRemove } from '../features/idToRemoveSlice';

export default function CardItem(props) {

  const cards = useSelector(start => start.cards.value)
  const idToRemove = useSelector(state => state.idToRemove.value)

  const dispatch = useDispatch()

  const deleteCard = () => {
    const index = cards.findIndex((card) => card.id === idToRemove)
    console.log(cards)
    console.log(index)
    let cardsArray = [...cards]
    cardsArray.splice(index, 1)
    dispatch(setCards(cardsArray))
    localStorage.removeItem(idToRemove)
    dispatch(setDeleteAlertFalse())
  }

  const handleClickOpen = () => {
    dispatch(setIdToRemove(props.id))
    dispatch(setDeleteAlertTrue())
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Avatar alt="Remy Sharp" sx={{width: { xs: 100, sm: 150, md: 200 }, height: {xs: 100, sm: 150, md: 200} }} />
      </Box>
      <CardContent>
       <DeleteAlert id={props.id} deleteCard={deleteCard}/>
        <Typography color={'secondary'} gutterBottom fontSize={20} fontWeight={'bold'} component="div">
          {props.title}
        </Typography>
        <Typography color={'secondary'} variant="body2" fontWeight={'bold'} >
          {props.status}
        </Typography>
        {props.kpi >= 85
          ?
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color={'secondary'} sx={{ mt: 2 }} variant="h6">
              KPI:  {props.kpi}
            </Typography>
            <SentimentSatisfiedAltIcon />
          </Box>
          :
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <Typography color={'error'} sx={{ mt: 2 }} variant="h6">
              KPI:  {props.kpi}
            </Typography>
            <SentimentVeryDissatisfiedIcon />
          </Box>
        }
      </CardContent>
      <CardActions>
        <Grid container
          direction="row"
          justifyContent="space-between"
          alignItems="center">

          <Tooltip title="Удалить сотрудника">
            <Button
              variant='outlined'
              color='error'
              size="small"
              onClick={handleClickOpen}
            >
              <DeleteOutlineOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Редактировать">
            <Link to={`/params/${props.id}`} >
              <Button
                variant='outlined'
                size="small"
              >
                <ModeEditOutlinedIcon />
              </Button>
            </Link>
          </Tooltip>
        </Grid>
      </CardActions>
    </Card>
  );
}
