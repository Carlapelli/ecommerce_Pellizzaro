import { useState } from "react"

import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState (initial) 

    const addItem = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const removeItem = () => {
        if (count > initial){
            setCount(count - 1)
            }
        }

    const addToCart = () => {
        if (count <= stock){
        onAdd (count)
    }}

    return (
        <>
            <div className="bottonsCard">
                <Button variant="outline-secondary" onClick ={addItem}>+</Button>
                <label className= "m-2">{count}</label>
                <Button variant="outline-secondary" onClick ={removeItem}>-</Button>
            </div>
                <Button variant="outline-secondary m-2" onClick ={addToCart}>Sumar al Carrito!</Button>
        </>

    )
}

export default ItemCount

