import React, { useState } from 'react'
import { Card, Center, CardBody, Image,Stack,
    CardHeader, 
    Heading, 
    Text, 
    Divider, 
    CardFooter, 
    Button,
    ButtonGroup,
    IconButton} from '@chakra-ui/react'
import	{AddIcon, MinusIcon} from '@chakra-ui/icons'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({item}) => {

    const {onAdd} = useContext(CartContext)

    return (
        <div>
            {item.map((p) => {
                return (
                    <div key={p.id}>
                        <Center p="1rem">
                            <Card>
                            <Stack mt='6' spacing='3'>
                                <CardHeader>
                                    <Heading size="md">{p.name}</Heading>
                                </CardHeader>
                                <Image width="100" height="700"
                                src={p.image}
                                borderRadius='lg'
                                />
                                
                                <CardBody>
                                    <Text>Detalles: {p.description}</Text>
                                    <Text>${p.price}</Text>
                                </CardBody>
                                <Divider />
                                <Center>
                                <CardFooter>
                                    <ButtonGroup>
                                        <Button onClick={()=> onAdd(p)} variant='ghost' colorScheme='blue'>
                                        Añadir al Carro
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                                </Center>
                                </Stack>
                            </Card>
                        </Center>
                    </div>
                )
            })}

        </div>
    )
}

export default ItemDetail