import { collection, getFirestore, addDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import CartFinal from './Cart/CartFinal'
import { Input, Stack, Button, Heading, Center, Card, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const checkout = ({$id, $quanty}) => {

    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const {cart} = useContext(CartContext)
    /*const [quanty, setQuanty] = useState(Number)
    const [id, setId] = useState("")*/

    const db = getFirestore()

    const handleSubmit =(e)=>{
        e.preventDefault()
        addDoc(orderCollection, order).then(({id})=>
        setOrderId(id))

    }


    const order ={
      buyer:{
        name, email//, quanty, id
      },
      
      items: cart.map(({id, quanty})=>({
        id, quanty

      }))
    }

    const orderCollection = collection(db, "orden")

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Center p="1rem">
      <Card>
      <Stack spacing={3}>
        <Text>Para continuar con la compra, llene este formulario. Lo estaremos contactando pronto!</Text>
        <Input type="text" placeholder='Nombre y apellido' onChange={(e)=> setName(e.target.value)} />
        <Input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
        <Button color={'blue.400'} variant='ghost' type='submit'>
        Enviar
        </Button>
      </Stack>
      </Card>
      </Center>
    </form>
    <Text>Order ID:{orderId}</Text>
    
    </>
  )
}

export default checkout