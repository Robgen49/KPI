import { createSlice } from '@reduxjs/toolkit'

export const ModalSlice = createSlice({
  name: 'Modal',
  initialState: {
    value: false
  },
  reducers: {
    setModalTrue: state => {
      state.value = true
    },
    setModalFalse: state => {
      state.value = false
    },
  }
})

export const { setModalFalse, setModalTrue} = ModalSlice.actions

export default ModalSlice.reducer