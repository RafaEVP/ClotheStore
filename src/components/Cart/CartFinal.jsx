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

const CartFinal = () => {
  const {cart} = useContext(CartContext)
  const total = cart.reduce((acc, p)=> acc + p.price * p.quanty, 0)

  return (
    <div>
      <Center>
      <Stack spacing={3}>
      <Card>
        <CardBody>

            <Heading size='md'>Precio total a pagar {total}</Heading>

        </CardBody>
      </Card>
      </Stack>
      </Center>
    </div>
  )
}

export default CartFinal