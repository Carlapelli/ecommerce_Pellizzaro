import Form from "../Form/Form"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (greeting) => {

    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

    const onAdd = (cantidad) => {
        console.log (`La cantidad seleccionada es ${cantidad}`)
    }

    return (
        <>
            <h3>{greeting.subtitulo}</h3>
            <Form saludar={saludar}/>
            <ItemCount initial={1} stock={10} onAdd ={onAdd}/>
        </>
    )
}

export default ItemListContainer