import './App.css'
import NavBar from './components/NavBar'
import ItemlisConteiner from './components/ItemListConteiner'



const App =() => {

  const greeting = "Bienvenidos a ClotheStore"
 
  return (
    <>
      <NavBar/>
      <ItemlisConteiner greeting={greeting}/>
      
    </>
  )
}

export default App