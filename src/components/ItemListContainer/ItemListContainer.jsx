import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFetch} from "../../helper/getFech"


import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"



const ItemListContainer = (greeting) => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] =useState (true)

    const {categoriaId} = useParams() 

    useEffect (()=> {
        if (categoriaId) {
        getFetch ()
            .then (respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false)) 
        } else {
        getFetch ()
            .then (respuesta => setProductos(respuesta))
            .catch (err => console.log (err))
            .finally(()=> setLoading(false)) 
        }        
    }, [categoriaId])

    return (
        <div>
                <h2>{greeting.subtitulo}</h2>

            { loading ? 
                    <Loading />
                    : 
                    <ItemList productos={productos} />
                }
        </div>
    )
}

export default ItemListContainer