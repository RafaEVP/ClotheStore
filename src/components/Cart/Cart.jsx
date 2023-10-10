import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'
import { Card, Center, CardBody, Image,Stack, WrapItem,
  CardHeader, 
  Heading, 
  Text, 
  Divider, 
  CardFooter, 
  Button,
  ButtonGroup,
  IconButton} from '@chakra-ui/react'
import ItemCounter from './ItemCounter'
  
  const Cart = () => {
    const {cart, setCart} = useContext(CartContext)

    const deleteP = (id) => {
      const whatId = cart.find((i)=> i.id === id)

      const deletedCart = cart.filter((i) => {
        return i !== whatId
      })
      setCart(deletedCart)
    }
    return cart.map((p)=>{
      return (
      <div key={p.id}>
        <Center>
          <Card maxW='sm'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Image
                    src={p.image}
                    alt='Syle of image'
                    borderRadius='lg'
              />
              <Heading size='md'>{p.name}</Heading>
              <Text color='blue.600' fontSize='2xl'>
                      ${p.price * p.quanty}
              </Text>
              <Text color='black.600' fontSize='1xl'>
                      {p.description}
              </Text>
              <ItemCounter p={p}/>
              <Center>
              <WrapItem>
              <Button colorScheme='white' onClick={()=>deleteP(p.id)}>🗑️</Button>
              </WrapItem>
              </Center>
            </Stack>
          </CardBody>
          </Card>
        </Center>
      </div>
      )
    })
  }
  


export default Cart