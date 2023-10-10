import CartFinal from './CartFinal'
import Checkout from '../Checkout'
import Cart from './Cart'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Card, Center, CardBody, Image,Stack,
  CardHeader, 
  Heading, 
  Text, 
  Divider, 
  CardFooter, 
  Button,
  ButtonGroup,
  IconButton} from '@chakra-ui/react'

const CartContent = () => {

  const {cart} = useContext(CartContext)


  return cart.length > 0 ? (
    <>
    <Cart/>
    <div></div>
    <CartFinal/>
    <div></div>
    <Checkout/>
  </>
  ) : (

    <Heading>Hola querido usuario, su carro de compras aun no tiene productos, lo invitamos a seleccionar alguno! Esperamos vuelva pronto.</Heading>

  )

}

export default CartContent