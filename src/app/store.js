import { configureStore } from '@reduxjs/toolkit'
import modalReduser from '../features/ModalSlice'
import formValuesReduser from '../features/FormValuesSlice'
import cardsReduser from '../features/CardsSlice'
import deleteAlertReduser from '../features/DeleteAlertSlice'
import idToRemoveReduser from '../features/idToRemoveSlice'
export default configureStore({
  reducer: {
    modal: modalReduser,
    formValues: formValuesReduser,
    cards: cardsReduser,
    deleteAlert: deleteAlertReduser,
    idToRemove: idToRemoveReduser,
  }
})