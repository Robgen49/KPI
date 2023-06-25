import { createSlice } from '@reduxjs/toolkit'

export const FormValuesSlice = createSlice({
  name: 'formValues',
  initialState: {
    value: {
      title: '',
      status: '',
      averageCheck: '',
      conversion: '',
      profitByMetter: '',
      countOfReturns: '',
      averageRevenuePerSale: '',
      countOfSales: '',
      countOfPositivComments: '',
    }
  },
  reducers: {
    setFormValues: (state, values) => {
      state.value = values.payload
    },
    clearFormValues: state =>{
      state.value = FormValuesSlice.getInitialState().value
    }
  }
})

export const { setFormValues, clearFormValues } = FormValuesSlice.actions

export default FormValuesSlice.reducer