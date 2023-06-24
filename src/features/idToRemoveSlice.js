import { createSlice } from '@reduxjs/toolkit'

export const idToRemoveSlice = createSlice({
    name: 'idToRemove',
    initialState: {
        value: ''
    },
    reducers: {
        setIdToRemove: (state, values) => {
            state.value = values.payload
        }
    }
})

export const { setIdToRemove } = idToRemoveSlice.actions

export default idToRemoveSlice.reducer