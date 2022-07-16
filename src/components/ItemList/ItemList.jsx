import { getFetch } from "../../helper/getFech"

const ItemList = () => {

    const [productos, setProductos] = useState ([])

    useEffect (()=>{ 
        getFetch ()
        .then (respuesta => setProductos(respuesta))
        .catch (err => console.log (err))
        .finally (()=> console.log ("finally"))
    },[])

    return (
        <div>
                {productos.map((productos)=>
                <Card className= "m-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productos.img}/>
                <Card.Body>
                    <Card.Title>{`${productos.categoria}: ${productos.nombre}`}</Card.Title>
                    <Card.Text> {`${productos.precio}`}</Card.Text>
                    <ItemCount initial={1} stock={10} onAdd ={onAdd}/>
                </Card.Body>
            </Card>

            )}
        </div>
    )
    }

export default ItemList