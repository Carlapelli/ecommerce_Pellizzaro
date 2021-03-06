import { Button, Card } from 'react-bootstrap'

const Item = ({img, id, categoria, nombre, precio}) => {

    return (
        <div>
                <Card className= "m-5" style={{ width: '18rem' }}>                
                    <Card.Img className="imgCards" variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title key={id}>{`${categoria}: ${nombre}`}</Card.Title>
                        <Card.Text> {`$${precio}`}</Card.Text>
                        <Button variant="outline-secondary m-2">Detalle del Producto</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item