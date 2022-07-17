import Form from "../Form/Form"
import ItemList from "../ItemList/ItemList"
import { useState } from "react"


const ItemListContainer = (greeting) => {

    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

    const [productos, setProductos] = useState ([])

    console.log (productos)
    
    return (
        <div>
            <h3>{greeting.subtitulo}</h3>
            <Form saludar={saludar}/>
            <div className= "cardContainer">
            <ItemList />
            </div>
        </div>
    )
}

export default ItemListContainer