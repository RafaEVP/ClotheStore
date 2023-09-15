import React from 'react'
import Item from "./Item"

const ItemList = ({productos}) => {

  return (
    <div>
      {
        productos.map((p)=>{
          return(
            <div key={p.id}>
            <Item
              name = {p.name}
              price = {p.price}
              description = {p.description}
            />
            </div>
          )
        })
        
      }
    </div>
  )
}

export default ItemList