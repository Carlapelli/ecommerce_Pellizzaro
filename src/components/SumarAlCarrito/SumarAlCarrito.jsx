import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'

const SumarAlCarrito = () => {
  return (
    <Link to="/cart">
        <Button variant="outline-secondary m-2">Ir al Carrito!</Button>
    </Link>
  )
}

export default SumarAlCarrito