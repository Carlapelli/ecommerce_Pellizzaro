import { useState } from "react"
import Button from 'react-bootstrap/Button';


const ItemCount = ({inicial, stock, onAdd}) => {

    const [count, setCount] = useState (inicial) 

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
        <>
            <div className="bottonsCard">
                <Button variant="outline-secondary" onClick ={sumarItem}>+</Button>
                <label className= "m-2">{count}</label>
                <Button variant="outline-secondary" onClick ={restarItem}>-</Button>
            </div>
            <Button variant="outline-secondary m-2" onClick ={sumarCarrito}>Al Carrito!</Button>
        </>

    )
}

export default ItemCount

