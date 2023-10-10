import { createContext, useState, useEffect } from "react";
import {addDoc, collection, doc, getDocs, getFirestore} from "firebase/firestore"

export const CartContext = createContext(null)

export const ShoppingCartContext = ( {children}) => {

    

    const [cart, setCart] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const oneItem = collection(db, "Productos")

        
          getDocs(oneItem).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => doc.data())
            setData(docs)
              
          })
        
    }, [])

    const onAdd =(p)=>{

        const pExist = cart.find((i) => i.id === p.id)

        if(pExist){
            setCart(cart.map((i)=> (i.id === p.id ? {...p, quanty: pExist.quanty + 1} : i)))

        }else{
            setCart([...cart, p])
        }
    }

    return(
        <>
        <CartContext.Provider value = {{ cart, setCart, data, setData, onAdd }}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default ShoppingCartContext