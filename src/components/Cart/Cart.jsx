import { Button } from "react-bootstrap"
import { useCartContext } from "../../Context/CartContext"

const Cart = () => {

const { cartList, vaciarTotalCarrito } = useCartContext ()

  return (
    <div>
      <h1>Carrito</h1>
      <ul>
          {cartList.map (item=> (
            <li key={item.id}>

              {item.nombre} {item.cantidad}

            </li>
          ))}
      </ul>  
      <Button variant="outline-secondary m-2" onClick ={vaciarTotalCarrito}>
                Vaciar Carrito!</Button>
      </div>
  )
}

export default Cart