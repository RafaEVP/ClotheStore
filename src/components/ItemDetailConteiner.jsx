import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import {addDoc, collection, doc, getDocs, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {

    const {id} = useParams()

    const [producto, setProducto] = useState ([])

    useEffect(() => {

        const db = getFirestore()
        const oneItem = collection(db, "Productos")

        
          getDocs(oneItem).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducto(docs)
              
          })
        
    }, [])
   
    const productsById = producto.filter((productos) => productos.id == id)


    return (
    <>
            <ItemDetail item={productsById}/>
    </>
    )
  }

export default ItemDetailConteiner