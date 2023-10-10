import { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"

const CartWidget = () => {

  const {cart} = useContext(CartContext)
  const nbCartItems = cart.reduce((acc, p) => acc + p.quanty, 0)

  return (
    <>
    <h4>🛒{cart.length > 0 ? nbCartItems : null}</h4>
    </>
  )
}

export default CartWidget