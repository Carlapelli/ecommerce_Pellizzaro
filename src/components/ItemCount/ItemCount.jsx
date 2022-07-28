import { useState } from "react"

import Button from 'react-bootstrap/Button';


const ItemCount = ({inicial, stock, onAdd, cambioBotton}) => {

    const [count, setCount] = useState (inicial) 

    const sumarItem = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restarItem = () => {
        if (count > inicial){
            setCount(count - 1)
            }
        }

    const sumarCarrito = () => {
        if (count < stock){
        onAdd (count)
    }}

    return (
        <>
            <div className="bottonsCard">
                <Button variant="outline-secondary" onClick ={sumarItem}>+</Button>
                <label className= "m-2">{count}</label>
                <Button variant="outline-secondary" onClick ={restarItem}>-</Button>
            </div>
            <Button variant="outline-secondary m-2" onClick ={() => {sumarCarrito(); cambioBotton()}}>
                Sumar al Carrito!</Button>
        </>

    )
}

export default ItemCount

