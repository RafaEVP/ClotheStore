import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import {Menu, MenuButton, MenuList, MenuItem, ChakraProvider, Button} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <>
    <ChakraProvider>

    <Flex>
        <Box p='4'> 
            ClotheStore
        </Box>
    <Spacer/>
        <Box>
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>Prendas Superiores</MenuItem>
                <MenuItem>Prendas Inferiores</MenuItem>
                
            </MenuList>
        </Menu>
        </Box>
    <Spacer />
        <Box p='4'>
            <CartWidget/>
        </Box>
    </Flex>
    </ChakraProvider>
    </>
  )
}

export default NavBar