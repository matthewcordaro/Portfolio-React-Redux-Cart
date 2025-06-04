import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpen: false,
}

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = slice.actions
export default slice.reducer
