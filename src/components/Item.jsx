import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
const Item = ({name, price, description, id, image, p}) => {

const {onAdd} = useContext(CartContext)

  return (
    <> 
    <div>
    <Center p="1rem">
      <Card maxW='sm'>
        <CardBody>
        <Stack mt='6' spacing='3'>
          <Image
            src={image}
            alt='Syle of image'
            borderRadius='lg'
          />
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              ${price}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <Center p="1rem">
          <ButtonGroup spacing='125'>
            <Button onClick={()=> onAdd(p)} variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='solid' colorScheme='blue'>
              <Link to ={`/item/${id}`}>
              Detalle
              </Link>
            </Button>
          </ButtonGroup>
          </Center>
        </CardFooter>
      </Card>
      </Center>
      </div>
    </>
  )
}

export default Item