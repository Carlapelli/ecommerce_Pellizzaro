import Titulo from "../Titulo/Titulo"


const Form = ({saludar}) => {
    return (
      <>
        <Titulo subtitulo= "Quién nos visita hoy?"/>
        <form>
          <button onClick={saludar}>Yo!</button>
        </form>
      </>
    )
}

export default Form