import { useState } from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import SumarAlCarrito from '../SumarAlCarrito/SumarAlCarrito'


const ItemDetail = ({img, id, categoria, nombre, precio, descripcion, stock}) => {

  const [toCart, aCarrito] = useState (true)

  const cambioBotton = ()=>{
    aCarrito (false)
  }

  const onAdd = (cant) => {
    console.log(`La cantidad es:  ${cant}`)
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
                <ItemCount inicial={1} stock={stock} onAdd={onAdd} cambioBotton={cambioBotton}/>
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