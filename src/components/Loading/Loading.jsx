import loadingImage from "../../imagenes/iconos/loading.png"

const Loading = () => {
  return (
    <div>
        <p>Cargando productos..</p> 
        <img src={loadingImage} alt="loading"/>
    </div>
  )
}

export default Loading