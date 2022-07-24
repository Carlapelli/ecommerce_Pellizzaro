import { Button, Card } from 'react-bootstrap'

const ItemDetail = ({img, id, categoria, nombre, precio, descripcion, stock}) => {

  return (
    <div>
    <Card className= "m-5" style={{ width: '30rem'}}>
            <Card.Body>
                <Card.Img className="imgDescripcion m-2" variant="top" src={img}/>
                <Card.Title key={id}>{`${nombre}`}</Card.Title>
                <Card.Text>
                {`Descripción: ${categoria}, ${descripcion}`}
                <br /> {`Precio: $${precio}, incluye IVA.`}
                </Card.Text>
                <Button variant="outline-secondary m-2">Comprar</Button>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{`Stock:${stock}`}</small>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default ItemDetail