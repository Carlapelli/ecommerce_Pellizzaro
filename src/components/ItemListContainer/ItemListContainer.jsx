import Form from "../Form/Form"

const ItemListContainer = (greeting) => {

    function saludar (){
        const nombre = prompt ("Ingrese su nombre")
        alert (`Hola ${nombre}!`)
    }

    return (
        <>
            <h3>{greeting.subtitulo}</h3>
            <Form saludar={saludar}/>
        </>
    )
}

export default ItemListContainer