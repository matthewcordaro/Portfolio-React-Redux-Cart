import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { closeModal } from "../features/modal/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)
  if (!isOpen) return
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            type='button'
            onClick={() => {
              dispatch(closeModal())
              dispatch(clearCart())
            }}
          >
            confirm
          </button>
          <button
            className='btn clear-btn'
            type='button'
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
