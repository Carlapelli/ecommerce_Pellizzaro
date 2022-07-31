import { useState } from 'react'

import ItemCount from '../ItemCount/ItemCount'
import SumarAlCarrito from '../SumarAlCarrito/SumarAlCarrito'

import { Card } from 'react-bootstrap'



const ItemDetail = ({img, id, categoria, nombre, precio, descripcion, stock}) => {

  const [toCart, aCarrito] = useState (true)

  const onAdd = (cant) => {
    console.log(`La cantidad es:  ${cant}`)
    aCarrito (false)
  }

  return (
    <div>
    <Card className= "m-5" style={{ width: '30rem'}}>
            <Card.Body>
                <Card.Img className="imgDescripcion m-2" variant="top" src={img}/>
                <Card.Title key={id}>{`${nombre}`}</Card.Title>
                <Card.Text>
                {`Descripción: ${categoria}, ${descripcion}`}
                <br /> {`Precio: $${precio}, incluye IVA.`}
                </Card.Text>
            { toCart === true ?
                <ItemCount inicial={1} stock={stock} onAdd={onAdd}/>
              :
                <SumarAlCarrito/>
            }               
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{`Stock:${stock}`}</small>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default ItemDetail