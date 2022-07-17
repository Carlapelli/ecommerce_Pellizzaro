import { useEffect, useState } from "react"
import { getFetch } from "../../helper/getFech"
import Form from "../Form/Form"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button' 
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = (greeting) => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] =useState (true)

    useEffect (()=> {
        getFetch ()
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false))
    }, [])

    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

    console.log (productos)
    
    return (
        <div>
            <h3>{greeting.subtitulo}</h3>
            <Form saludar={saludar}/>
                {loading ? <p>Cargando productos..</p>: productos?.map(producto =>
                <Card className= "m-5" style={{ width: '18rem' }}>                
                    <Card.Img variant="top" src={producto.img}/>
                    <Card.Body>
                        <Card.Title key= {producto.id}>{`${producto.categoria}: ${producto.nombre}`}</Card.Title>
                        <Card.Text> {`$${producto.precio}`}</Card.Text>
                        <Button variant="outline-secondary m-2">Detalle del Producto</Button>
                        {/* <ItemCount initial={1} stock={10} onAdd ={onAdd}/> */}
                    </Card.Body>
                </Card>
        )}
        </div>
    )
}

export default ItemListContainer