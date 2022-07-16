import { useState } from "react"

import Sample from "../../imagenes/iconos/sample.png"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCount = ({inicial = 1, stock = 10, onAdd}) => {

    const [count, setCount] = useState (1) 

    const sumarItem = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restarItem = () => {
        if (count > 1){
            setCount(count - 1)
            }
        }

    const sumarCarrito = () => {
        onAdd (count)
    }

    return (
        <Card className= "m-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Sample} />
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                Lorem ipsum dolor.
                </Card.Text>
            <div className="bottonsCard">
                <Button variant="outline-secondary" onClick ={sumarItem}>+</Button>
                <label className= "m-2">{count}</label>
                <Button variant="outline-secondary" onClick ={restarItem}>-</Button>
            </div>
            <Button variant="outline-secondary m-2" onClick ={sumarCarrito}>Al Carrito!</Button>
            </Card.Body>
        </Card>

    )
}

export default ItemCount

