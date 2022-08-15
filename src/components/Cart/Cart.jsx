import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import CartList from "../CartList/CartList"
import Form from "../Form/Form"

import { Button } from "react-bootstrap"

const Cart = () => {

const { emptyCart, totalPrice } = useCartContext ()

return (
  <>
    <div>
      <h1 className="m-5">Carrito</h1>
    </div>
        {totalPrice() != 0 &&
        <div>
          <div>
            <table className = "table text-center align-items-center">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>              
                </tr>
            </thead>
        <CartList/>
            </table>
              <h6> Precio Total: ${totalPrice()} </h6>
              <Button variant="outline-secondary m-2" onClick ={emptyCart}> Vaciar Carrito!</Button>
          </div>
        <Form />
    </div>  }
    <div>
          <Link to="/">     
            <Button variant="outline-secondary m-5"> Seguir Comprando</Button> 
          </Link>
    </div>
  </>
  )
}

export default Cart