import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const ItemlisConteiner = ({greeting}) => {

  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>{greeting}</h1>
      <br></br>
      <h2>Proximamente...</h2>
      <br></br>
      <p>Mientras acabamos nuestro proyecto puedes sumar y restar:</p>
      <br></br>
      <div>{contador}</div>
      <div>
      <Button onClick={() => setContador(contador + 1)}>Sumar</Button>
      <Button onClick={() => setContador(contador - 1)}>Restar</Button>
      </div>
    </>
  )
}

export default ItemlisConteiner