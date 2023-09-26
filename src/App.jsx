import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




const App =() => {

  const greeting = "Bienvenidos a ClotheStore"
 
  return (
    <>
  <BrowserRouter>

      <NavBar/>

  <Routes>
      {/*<ItemListConteiner greeting={greeting}/>
      {/*<ItemDetailConteiner/>*/}
      <Route exact path="/" element={<ItemListConteiner greeting={greeting}/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/category/:id" element={<ItemListConteiner greeting={greeting}/>}/>
      <Route exact path="/item/:id" element={<ItemDetailConteiner/>}/>

  </Routes>

  </BrowserRouter>
    </>
  )
}

export default App