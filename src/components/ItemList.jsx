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
              p = {p}
              name = {p.name}
              price = {p.price}
              description = {p.description}
              id = {p.id}
              image={p.image}
            />
            </div>
          )
        })
        
      }
    </div>
  )
}

export default ItemList