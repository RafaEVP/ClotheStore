import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = () => {
    const productos = [
      {id:1, name:"Sueter graffiti", category: "Sueteres", price:70, description:"Sueter customizado para el cliente utilizando el estilo estilo del graffiti", detail:"Sueter de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo graffiti"},
      {id:2, name:"Sueter pintura", category: "Sueteres", price:70, description:"Sueter customizado para el cliente utilizando el estilo estilo del pintura", detail:"Sueter de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo pintura"},
      {id:3, name:"Sueter dibujo", category: "Sueteres", price:60, description:"Sueter customizado para el cliente utilizando el estilo estilo del dibujo", detail:"Sueter de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo dibujo"},
      {id:4, name:"Camisa graffiti", category: "Camisas", price:40, description:"Camisa customizada para el cliente utilizando el estilo estilo del graffiti", detail:"Camisa de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo graffiti"},
      {id:5, name:"Camisa pintura", category: "Camisas", price:40, description:"Camisa customizada para el cliente utilizando el estilo estilo del pintura", detail:"Camisa de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo pintura"},
      {id:6, name:"Camisa dibujo", category: "Camisas", price:30, description:"Camisa customizada para el cliente utilizando el estilo estilo del dibujo", detail:"Camisa de algodon fabricado a medida con acabados a gusto del comprador utilizando el estilo dibujo"}
    ]
  
    const mostrarProductos = new Promise((resolve, reject) => {
      if (productos.length > 0){
        setTimeout(() => {
          resolve(productos)
        }, 2000);
  
      }else{
        reject("No tenemos productos en stock")
      }
    })
    
    mostrarProductos
      .then((resultado)=> {
        console.log(resultado)
      })
      .catch((error) => {
        console.log(error)
      })
  
    return (
    <>
            <ItemDetail productos={productos}/>
    </>
    )
  }

export default ItemDetailConteiner