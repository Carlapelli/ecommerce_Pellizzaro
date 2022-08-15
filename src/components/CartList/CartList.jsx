import { useCartContext } from '../../Context/CartContext'

import { Button } from 'react-bootstrap'

const CartList = () => {

  const { cartList, deleteItem} = useCartContext ()

  return (
    <>
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
    </>
  )
}

export default CartList