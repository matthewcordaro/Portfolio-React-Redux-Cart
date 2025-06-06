import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import Modal from "./Modal"
import { clearCart } from "../features/cart/cartSlice"
import { openModal } from "../features/modal/modalSlice"

function CartContainer() {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  // Empty Cart
  if (amount < 1)
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  // 1+ items in cart
  return (
    <>
      <Modal />
      <section className='cart'>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
            <button
              className='btn clear-btn'
              onClick={() => dispatch(openModal())}
            >
              clear cart
            </button>
          </div>
        </footer>
      </section>
    </>
  )
}

export default CartContainer
