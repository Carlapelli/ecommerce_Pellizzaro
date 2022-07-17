import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Item = () => {
  return (
    
    productos?.map(producto =>
    <Card className= "m-5" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img}/>
        <Card.Body>
            <Card.Title key= {producto.id}>{`${producto.categoria}: ${producto.nombre}`}</Card.Title>
            <Card.Text> {`$${producto.precio}`}</Card.Text>
            <Button variant="outline-secondary m-2">Detalle del Producto</Button>
            {/* <ItemCount initial={1} stock={10} onAdd ={onAdd}/> */}
        </Card.Body>
    </Card>
        ))
    }

export default Item