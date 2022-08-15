import { useState } from 'react'

import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import MoveToCart from '../MoveToCart/MoveToCart'

import { Card } from 'react-bootstrap'


const ItemDetail = ({product}) => {

  const [toCart, setToCart] = useState (true)

  const {addToCart, cartList} = useCartContext ()

  const onAdd = (cant) => {
    setToCart (false)
    addToCart ({...product, cantidad: cant})    
  }

  return (
    <div>
    <Card className= "m-5" style={{ width: '30rem'}}>
            <Card.Body>
                <Card.Img className="imgDescripcion m-2" variant="top" src={product.img}/>
                <Card.Title key={product.id}>{`${product.nombre}`}</Card.Title>
                <Card.Text>
                {`Descripción: ${product.categoria}, ${product.descripcion}`}
                <br /> {`Precio: $${product.precio}, incluye IVA.`}
                </Card.Text>
                { toCart === true ?
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                  :
                    <MoveToCart/>
                }               
            </Card.Body>
            <Card.Footer><small className="text-muted">{`Stock:${product.stock}`}</small></Card.Footer>
        </Card>
    </div>
  )
}

export default ItemDetail