import ItemList from "./ItemList"



const ItemlisConteiner = ({greeting}) => {
  const productos = [
    {id:1, name:"Sueter graffiti", category: "S", price:70, description:"Sueter customizado para el cliente utilizando el estilo estilo del graffiti"},
    {id:2, name:"Sueter pintura", category: "S", price:70, description:"Sueter customizado para el cliente utilizando el estilo estilo del pintura"},
    {id:3, name:"Sueter dibujo", category: "S", price:60, description:"Sueter customizado para el cliente utilizando el estilo estilo del dibujo"},
    {id:4, name:"Camisa graffiti", category: "C", price:40, description:"Camisa customizada para el cliente utilizando el estilo estilo del graffiti"},
    {id:5, name:"Camisa pintura", category: "C", price:40, description:"Camisa customizada para el cliente utilizando el estilo estilo del pintura"},
    {id:6, name:"Camisa dibujo", category: "C", price:30, description:"Camisa customizada para el cliente utilizando el estilo estilo del dibujo"}
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
      <h1>{greeting}</h1>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemlisConteiner