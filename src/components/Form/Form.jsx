import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { useCartContext } from "../../Context/CartContext"

const Form = () => {

  const { cartList, emptyCart, totalPrice} = useCartContext ()

      const [formData, setFormData] = useState({
        email:'', 
        name:'', 
        tel:'',
        repeatEmail:''
    })

    const generateOrder = async (e) =>{
      e.preventDefault ()
    
      const order = {}
      order.buyer = formData

      if (formData.name && formData.tel && formData.email && (formData.email === formData.repeatEmail)){
        order.buyer = formData
        order.items = cartList.map ( prod => {
          return{
            product: prod.nombre,
            id: prod.id,
            price: prod.precio * prod.cantidad
          }
        })
        order.total = totalPrice()

        const db = getFirestore()
        const queryOrders = collection(db, "orders")
        addDoc(queryOrders, order)
        .then (resp => setInfoOrder(resp.id))
        .finally (()=> emptyCart ())

      } else {
        alert ("Verifique que los datos ingresados sean correctos")
      }
    }

    const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      })
  }


    return (
      <div>
      <h2>Confirmar compra</h2>
          <form>
            <label className="formTitle">Complete el formulario ♥</label>
            <ul className="form-style-1">
                <li><label>Nombre <span className="required">*</span></label>
                    <input type="text" name="field1" className="field-long" onChange={handleChange} value={formData.name}/>
                </li>
                <li>
                    <label>Teléfono <span className="required">*</span></label>
                    <input type="number" name="field2" className="field-long" onChange={handleChange} value={formData.tel}/>
                </li>
                <li>
                    <label>Email <span className="required">*</span></label>
                    <input type="email" name="field3" className="field-long" onChange={handleChange} value={formData.email}/>
                </li>
                <li>
                    <label>Repita Email <span className="required">*</span></label>
                    <input type="email" name="field4" className="field-long" onChange={handleChange} value={formData.repeatEmail}/>
                </li>
                <li>
                <Button variant="outline-secondary m-2" onClick ={generateOrder}> Terminar Compra!</Button>
                </li>
            </ul>
        </form>
    </div>
    )
}

export default Form