import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { calculateTotals, getCartItems } from "./features/cart/cartSlice"
import CartContainer from "./components/CartContainer"
import Navbar from "./components/Navbar"

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  // Load Data
  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  // Update Totals
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
