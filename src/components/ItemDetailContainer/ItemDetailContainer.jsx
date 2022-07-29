import {useParams} from "react-router-dom"
import { useEffect, useState} from "react"
import { getFetch } from "../../helper/getFech"


import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] =useState (true)

    const {id} = useParams()

    useEffect (()=> {
        getFetch (id)
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false))
    }, [])


    return (
        <div className="itemDetailContainer">
            { loading ? 
            <Loading />
                    : 
            <ItemDetail productos={productos} img={productos.img} id={productos.id} categoria={productos.categoria} nombre={productos.nombre} precio={productos.precio} descripcion={productos.descripcion} stock={productos.stock}/>
            }
        </div>
    )
}

export default ItemDetailContainer