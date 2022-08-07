import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

import { Button } from "react-bootstrap"

const Cart = () => {

const { cartList, vaciarTotalCarrito, precioTotal, eliminarItem  } = useCartContext ()

return (
  
    <div>
      <h1 className="m-5">Carrito</h1>
    {precioTotal() != 0 &&
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
          {cartList.map (item=> (
            <tbody key={item.id}>
              <tr>
                <td>{item.nombre}</td>
                <td>${item.precio}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio * item.cantidad}</td>
                <td><Button variant="outline-secondary m-2" onClick ={()=>eliminarItem (item.id)} >Eliminar</Button></td>
              </tr>
            </tbody>
          ))}
      </table>
      <h4> Precio Total: ${precioTotal()} </h4>
      <Button variant="outline-secondary m-2" onClick ={vaciarTotalCarrito}> Vaciar Carrito!</Button>
      </div>
      }
      <Link to="/">     
        <Button variant="outline-secondary m-2"> Seguir Comprando</Button> 
      </Link>
    </div>
  )
}

export default Cart