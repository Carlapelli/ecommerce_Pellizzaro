import { getFetch } from "../../helper/getFech"
import { useEffect, useState } from "react"
import loadingImage from "../../imagenes/iconos/loading.png"

import Item from "../Item/Item"

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
        <div className= "cardContainer">
            {loading ? <div><p>Cargando productos..</p> <img src={loadingImage} alt="loading"/></div>: productos?.map(producto =>
            <Item img={producto.img} id={producto.id} categoria={producto.categoria} nombre={producto.nombre} precio={producto.precio}/>
            )}
        </div>
    )
    }

export default ItemList