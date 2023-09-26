import React from 'react'
import { Card, Center, CardBody, CardHeader, Heading, Text, Divider, CardFooter, Button} from '@chakra-ui/react'

const ItemDetail = ({productos}) => {

{/*const filteredProducts = productos.filter((producto) => producto.id == id)*/}

  return (
    <div>
        {productos?.map((p) => {
            return (
                <div key={p.id}>
                    <Center p="1rem">
                        <Card>
                            <CardHeader>
                                <Heading size="md">{p.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Detalles: {p.detail}</Text>
                                <Text>${p.price}</Text>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Button variant='ghost' colorScheme='blue'>
                                Añadir al Carro
                                </Button>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )
        })}

    </div>
  )
}

export default ItemDetail