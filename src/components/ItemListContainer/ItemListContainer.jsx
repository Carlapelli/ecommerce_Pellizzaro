import { useEffect, useState } from "react"
import { getFetch } from "../../helper/getFech"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import Form from "../Form/Form"
import loadingImage from "../../imagenes/iconos/loading.png"

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

    const onAdd = (cant) => {
        console.log(`La cantidad es:  ${cant}`)
    }

    console.log (productos)
    
    return (
        <div>
            <h3>{greeting.subtitulo}</h3>
            <Form saludar={saludar}/>
            { loading ? 
                    <div><p>Cargando productos..</p> <img src={loadingImage} alt="loading"/></div>
                    : 
                    <ItemList productos={productos} />
                }
            <ItemCount initial={1} stock={10} onAdd = {onAdd}/>
        </div>
    )
}

export default ItemListContainer