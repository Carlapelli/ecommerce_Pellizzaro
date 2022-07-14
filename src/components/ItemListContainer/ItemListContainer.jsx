import Form from "../Form/Form"
import Titulo from "../Titulo/Titulo"

const ItemListContainer = () => {

    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

    return (
        <>
            <Titulo titulo="Bienvenid@!" subtitulo= "A mi página de diseños"/>
            <Form saludar={saludar}/>
        </>
    )
}

export default ItemListContainer