import { useState } from 'react'
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
import { CartContext } from '../../context/ShoppingCartContext'

const ItemCounter = ({p}) => {

    
    
    const {onAdd, cart, setCart} = useContext(CartContext)

    const onRemove = () => {

        const pExist = cart.find((i) => i.id === p.id)

        pExist.quanty !== 1 && setCart(cart.map((i)=> (i.id === p.id ? {...p, quanty: pExist.quanty - 1} : i)))

    }

  return (
    <div>
        <ButtonGroup>
            <IconButton variant='ghost' colorScheme='blue' onClick={()=>onRemove(p)} icon= {<MinusIcon/>}/>
            <Button variant='ghost' colorScheme='blue'>{p.quanty}</Button>
            <IconButton variant='ghost' colorScheme='blue' onClick={()=>onAdd(p)} icon= {<AddIcon/>}/>
        </ButtonGroup>
    </div>
  )
}

export default ItemCounter