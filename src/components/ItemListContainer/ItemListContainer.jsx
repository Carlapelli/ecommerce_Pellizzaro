import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {getFetch} from "../../helper/getFech"


import Titulo from "../Titulo/Titulo"
import Form from "../Form/Form"
import loadingImage from "../../imagenes/iconos/loading.png"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = (greeting) => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] =useState (true)

    const {categoriaId} = useParams() 
    console.log(categoriaId)

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


    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

/*     const onAdd = (cant) => {
        console.log(`La cantidad es:  ${cant}`)
    }
 */
    return (
        <div>
                <h2>{greeting.subtitulo}</h2>
                {/* <Form saludar={saludar}/> */}

            { loading ? 
                    <div><p>Cargando productos..</p> <img src={loadingImage} alt="loading"/></div>
                    : 
                    <ItemList productos={productos} />
                }
{/*             <ItemCount inicial={1} stock={10} onAdd = {onAdd}/> */}
        </div>
    )
}

export default ItemListContainer