import { useState } from 'react'

import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import SumarAlCarrito from '../SumarAlCarrito/SumarAlCarrito'

import { Card } from 'react-bootstrap'


const ItemDetail = ({producto}) => {

  const [toCart, aCarrito] = useState (true)

  const {agregarAlCarrito, cartList} = useCartContext ()

  const onAdd = (cant) => {
    console.log(`La cantidad es:  ${cant}`)
    aCarrito (false)
    agregarAlCarrito ({...producto, cantidad: cant})
  }

  console.log (cartList)

  return (
    <div>
    <Card className= "m-5" style={{ width: '30rem'}}>
            <Card.Body>
                <Card.Img className="imgDescripcion m-2" variant="top" src={producto.img}/>
                <Card.Title key={producto.id}>{`${producto.nombre}`}</Card.Title>
                <Card.Text>
                {`Descripción: ${producto.categoria}, ${producto.descripcion}`}
                <br /> {`Precio: $${producto.precio}, incluye IVA.`}
                </Card.Text>
            { toCart === true ?
                <ItemCount inicial={1} stock={producto.stock} onAdd={onAdd}/>
              :
                <SumarAlCarrito/>
            }               
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{`Stock:${producto.stock}`}</small>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default ItemDetail