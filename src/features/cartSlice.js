import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const slice = createSlice({
  name: "cart",
  initialState,
})

console.log(slice)

export default slice.reducer
