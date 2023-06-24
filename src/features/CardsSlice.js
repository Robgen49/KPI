import { createSlice } from '@reduxjs/toolkit'

export const CardsSlice = createSlice({
  name: 'cards',
  initialState: {
    value: []
  },
  reducers: {
    setCards: (state, values) => {
      state.value = values.payload
    }
  }
})

export const { setCards } = CardsSlice.actions
export default CardsSlice.reducer