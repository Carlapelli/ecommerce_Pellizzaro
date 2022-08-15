import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"

import { Button } from "react-bootstrap"
import Swal from "sweetalert2"

const Form = () => {

  const { cartList, emptyCart, totalPrice } = useCartContext () //gets functions from context

  const [infoOrder, setInfoOrder] = useState('') //gets the ID for the buyer

//Sets data entered in inputs
const [formData, setFormData] = useState({
  email: "",
  name: "", 
  phone: "",
  repeatEmail: ""
})

const generateOrder = (e) =>{
  e.preventDefault ()

  if ( formData.name === "" || formData.phone === "" || formData.email === "" || (formData.email != formData.repeatEmail)){

    Swal.fire({
      title:"Ups! Verifica los datos ingresados.",
      icon: "warning",
      confirmButtonColor: 'rgb(233, 170, 191)'})

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

  // Generates data in Firestore
  const db = getFirestore()
  const queryOrders = collection(db, "orders")
  addDoc(queryOrders, order)
  .then (resp => setInfoOrder (Swal.fire({
    title:`Gracias por tu compra!\n Número de Orden:\n ${resp.id}`,
    icon: "success",
    confirmButtonColor: 'rgb(233, 170, 191)'})))
  .catch (err => console.log (err))
  .finally (()=> setFormData({
    email: "",
    name: "", 
    phone: "",
    repeatEmail: ""
  }))

  emptyCart () //delete the cart once purchased is confirmed
}}

//it gets inputs updates
const handleChange = (e) =>{
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

    return (
    <>
      <h2>Confirmar compra</h2>
      <form>
        <label className="formTitle">Complete el formulario ♥</label>
        <ul className="form-style-1">
            <li><label>Nombre <span className="required">*</span></label>
                <input type="text" name="name" className="field-long" onChange={handleChange}/>
            </li>
            <li>
                <label>Teléfono <span className="required">*</span></label>
                <input type="number" name="phone" className="field-long" onChange={handleChange}/>
            </li>
            <li>
                <label>Email <span className="required">*</span></label>
                <input type="email" name="email" className="field-long" onChange={handleChange}/>
            </li>
            <li>
                <label>Repita Email <span className="required">*</span></label>
                <input type="email" name="repeatEmail" className="field-long" onChange={handleChange}/>
            </li>
            <li>
            <Button variant="outline-secondary m-2" onClick ={generateOrder}> Terminar Compra!</Button>
            </li>
        </ul>
    </form>
    </>
    )
}

export default Form