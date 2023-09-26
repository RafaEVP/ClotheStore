import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import {Menu, MenuButton, MenuList, MenuItem, ChakraProvider, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <ChakraProvider>

    <Flex>
        
        <Box p='4'> 
        <Link to={"/"}>
            ClotheStore
        </Link>
        </Box>
    <Spacer/>
        <Box>
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
            <MenuList>
                <MenuItem>
                <Link to = {`/category/${'C'}`}>
                Camisas
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to = {`/category/${'S'}`}>
                Sueteres
                </Link>
                </MenuItem>
                
            </MenuList>
        </Menu>
        </Box>
    <Spacer />
        <Box p='4'>
            <Link to ={"Cart"}>
            <CartWidget/>
            </Link>
        </Box>
    </Flex>
    </ChakraProvider>
    </>
  )
}

export default NavBar