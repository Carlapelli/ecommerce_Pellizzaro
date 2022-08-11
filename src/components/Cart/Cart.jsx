import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"

import { Button } from "react-bootstrap"



const Cart = () => {

const { cartList, emptyCart, totalPrice, deleteItem  } = useCartContext ()

const [infoOrden, setInfoOrden] = useState('')

//Funcion para generar orden con los datos del comprador hardcodeados
const generarOrden = (e) =>{
  e.preventDefault ()

  const orden = {}
  orden.comprador = {email: "carla@gmail.com", nombre: "Carla", telefono: "150001076"}
  orden.items = cartList.map ( prod => {
    return{
      producto: prod.nombre,
      id: prod.id,
      precio: prod.precio * prod.cantidad
    }
  })
  orden.total = totalPrice()

  // Genera orden en base de datos (collection en firebase)
  const db = getFirestore()
  const queryOrdenes = collection(db, "ordenes")
  addDoc(queryOrdenes, orden)
  .then (respuesta => setInfoOrden(respuesta.id))

  // actualizar el documento en la collection 
  /* const queryUpdateDoc = doc (db, "productos", "Gn716Y7ZFgo4yXgWrWee")
  updateDoc(queryUpdateDoc, {
    stock: 9
  })
  .then (()=> console.log ("stock actualizado")) */

  emptyCart ()
}

return (
  <>
    <div>
      <h1 className="m-5">Carrito</h1>
    </div>
    <div>
    {totalPrice() != 0 &&
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
                <td><Button variant="outline-secondary m-2" onClick ={()=>deleteItem (item.id)} >Eliminar</Button></td>
              </tr>
            </tbody>
          ))}
      </table>
      <h4> Precio Total: ${totalPrice()} </h4>
      <Button variant="outline-secondary m-2" onClick ={emptyCart}> Vaciar Carrito!</Button>
      <Button variant="outline-secondary m-2" onClick ={generarOrden}> Terminar Compra!</Button>      
      </div>
      }
      {infoOrden!=='' && <h4>Confirmación de su orden: {infoOrden}</h4>}
      <Link to="/">     
        <Button variant="outline-secondary m-5"> Seguir Comprando</Button> 
      </Link>
    </div>
  </>
  )
}

export default Cart