import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore} from "firebase/firestore"


const ItemlisConteiner = ({greeting}) => {
  const {category} = useParams()

  const [productos, setProductos] = useState ([])


  useEffect (() =>{
      const db = getFirestore()
  
      const itemsCollection = collection(db,"Productos" )/*`${category}`*/
      getDocs(itemsCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => doc.data())
          setProductos(docs)
      })
  
  
  
  }, [])

  const filteredProducts = productos.filter((producto) => producto.category == category)

  return (
    <>
      <h1>{greeting}</h1>
      <ItemList productos={filteredProducts}/>
      
    </>
  )
}

export default ItemlisConteiner