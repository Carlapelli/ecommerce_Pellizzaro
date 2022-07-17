import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({img, id, categoria, nombre, precio}) => {

  return (
    <div>
                    <Card className= "m-5" style={{ width: '18rem' }}>                
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title key={id}>{`${categoria}: ${nombre}`}</Card.Title>
                    <Card.Text> {`$${precio}`}</Card.Text>
                    <Button variant="outline-secondary m-2">Detalle del Producto</Button>
                    <ItemCount initial={1} stock={10}/>
                </Card.Body>
            </Card>
    </div>
  )
}

export default Item