import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({name, price, description}) => {

  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://img01.ztat.net/article/spp-media-p1/b213276977e6444fa7389a0e997e7ebc/6bd8c5ca2ba34799abb390ea6d3f0d4e.jpg?imwidth=1800&filter=packshot'
            alt='Sueter estilo graffiti'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
            <Button variant='solid' colorScheme='blue'>
              <Link to ={`/item/${Item.id}`}>
              Detalle
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default Item