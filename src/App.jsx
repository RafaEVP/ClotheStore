import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout'
import ShoppingCartContext from './context/ShoppingCartContext'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import CartWidget from './components/CartWidget'
import CartContent from './components/Cart/CartContent'


const App =() => {

  const greeting = "Bienvenidos a ClotheStore"
 
  return (
    <>
    <ShoppingCartContext>
  <BrowserRouter>

      <NavBar/>
      
  <Routes>
      <Route exact path="/" element={<ItemListConteiner greeting={greeting}/>}/>
      <Route exact path="/cart" element={<CartContent/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/category/:category" element={<ItemListConteiner greeting={greeting}/>}/>
      <Route exact path="/item/:id" element={<ItemDetailConteiner/>}/>
  </Routes>

  </BrowserRouter>
  
  </ShoppingCartContext>
  </>
    
  )
}

export default App