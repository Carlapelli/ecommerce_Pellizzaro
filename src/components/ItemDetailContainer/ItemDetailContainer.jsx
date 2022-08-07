import {useParams} from "react-router-dom"
import { useEffect, useState} from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { getFetch } from "../../helper/getFech"

import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState ({})
    const [loading, setLoading] =useState (true)

    const {id} = useParams()

    useEffect (()=>{
        const db = getFirestore() // trae firestore
        const queryProducto = doc(db,"productos", id) //apunta a un productor en especifico, 3 parametros
        getDoc(queryProducto) //trae el doc
        .then (respuesta => setProductos({id: respuesta.id, ...respuesta.data()}))//funcion data para extraer todos los datos del obj
        .catch (err => console.log (err))
        .finally(()=> setLoading(false)) 
    }, [])

    //console.log (productos)

/*     useEffect (()=> {
        getFetch (id)
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false))
    }, [id]) */


    return (
        <div className="itemDetailContainer">
            { loading ? 
            <Loading />
                    : 
            <ItemDetail producto={productos}/>
            }
        </div>
    )
}

export default ItemDetailContainer