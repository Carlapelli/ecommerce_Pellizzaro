import { useState, useContext, createContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) => {

    const [ cartList , setCartList ] =useState([])

    const agregarAlCarrito = (producto, cantidad) =>{

        setCartList([...cartList, producto])
        
    /*  const index = cartList.findIndex(item => item.id === cartList.id)
    
        if (index == -1) {
            setCartList([...cartList, {producto, cantidad}]
        }
        else {
            const primeraCant = cartList[index].cantidad
            setCartList([...cartList, { producto, cantidad: cantidad + primeraCant}])
        } */
    }

    const vaciarTotalCarrito = () => {
        setCartList ([])
    }

    return (
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            vaciarTotalCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider