import { getFetch } from "../../helper/getFech"
import { useEffect, useState } from "react"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button' 
import ItemCount from "../ItemCount/ItemCount"

const ItemList = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] =useState (true)

    useEffect (()=> {
        getFetch ()
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
            {loading ? <p>Cargando productos..</p>: productos?.map(producto =>
            <Card className= "m-5" style={{ width: '18rem' }}>                
                <Card.Img variant="top" src={producto.img}/>
                <Card.Body>
                    <Card.Title key= {producto.id}>{`${producto.categoria}: ${producto.nombre}`}</Card.Title>
                    <Card.Text> {`$${producto.precio}`}</Card.Text>
                    <Button variant="outline-secondary m-2">Detalle del Producto</Button>
                    <ItemCount initial={1} stock={10}/>
                </Card.Body>
            </Card>
    )}
    </div>
    )
    }

export default ItemList