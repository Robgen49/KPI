import { createSlice } from '@reduxjs/toolkit'

export const DeleteAlert = createSlice({
  name: 'deleteAlert',
  initialState: {
    value: false
  },
  reducers: {
    setDeleteAlertTrue: state => {
      state.value = true
    },
    setDeleteAlertFalse: state => {
      state.value = false
    },
  }
})

export const { setDeleteAlertFalse, setDeleteAlertTrue} = DeleteAlert.actions

export default DeleteAlert.reducer