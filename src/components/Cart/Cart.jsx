import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"

import { Button } from "react-bootstrap"
import Form from "../Form/Form"

const Cart = () => {

const { cartList, emptyCart, totalPrice, deleteItem  } = useCartContext ()

const [infoOrder, setInfoOrder] = useState('') //gets the ID for the buyer

//for Form
const [formData, setFormData] = useState({
  email: "",
  name: "", 
  phone: "",
  repeatEmail: ""
})

//Funcion para generar orden con los datos del comprador hardcodeados
const generateOrder = (e) =>{
  e.preventDefault ()

  if ( formData.name === "" || formData.phone === "" || formData.email === "" || (formData.email != formData.repeatEmail)){

    alert ("Verifique si los datos son correctos")

  } else {

  const order = {}
  order.buyer = formData
  order.items = cartList.map ( prod => {
    return{
      product: prod.nombre,
      id: prod.id,
      price: prod.precio * prod.cantidad
    }
  })
  order.total = totalPrice()

  // Genera orden en base de datos (collection en firebase)
  const db = getFirestore()
  const queryOrders = collection(db, "orders")
  addDoc(queryOrders, order)
  .then (resp => setInfoOrder(resp.id))

  emptyCart ()
}}

// get updates in inputs form
const handleChange = (e) =>{
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}


return (
  <>
    <div>
      <h1 className="m-5">Carrito</h1>
    </div>
    {infoOrder!=='' && <h4>Confirmación de su orden: {infoOrder}</h4>}
    
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
              <h6> Precio Total: ${totalPrice()} </h6>
              <Button variant="outline-secondary m-2" onClick ={emptyCart}> Vaciar Carrito!</Button>
          </div>
      
      {/* FORMULARIO */}
    
      <h2>Confirmar compra</h2>
          <form>
            <label className="formTitle">Complete el formulario ♥</label>
            <ul className="form-style-1">
                <li><label>Nombre <span className="required">*</span></label>
                    <input type="text" name="name" className="field-long" onChange={handleChange}/* onChange={handleChange} value={formData.name} *//>
                </li>
                <li>
                    <label>Teléfono <span className="required">*</span></label>
                    <input type="number" name="phone" className="field-long" onChange={handleChange}/* onChange={handleChange} value={formData.tel} *//>
                </li>
                <li>
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="email" className="field-long" onChange={handleChange}/* onChange={handleChange} value={formData.email} *//>
                </li>
                <li>
                    <label>Repita Email <span className="required">*</span></label>
                    <input type="email" name="repeatEmail" className="field-long" onChange={handleChange}/* onChange={handleChange} value={formData.repeatEmail} *//>
                </li>
                <li>
                <Button variant="outline-secondary m-2" onClick ={generateOrder}> Terminar Compra!</Button>
                </li>
            </ul>
        </form>
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