import * as React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { setDeleteAlertFalse } from '../features/DeleteAlertSlice';

export default function DeleteAlert({deleteCard}) {
  const deleteAlert = useSelector(state => state.deleteAlert.value)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setDeleteAlertFalse())
  };

  return (
    <div>
      <Dialog
        open={deleteAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Удалить сотрудника?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Восстановить данные будет невозможно
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={deleteCard} autoFocus>Удалить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}