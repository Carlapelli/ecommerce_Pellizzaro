import { useState, useContext, createContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) => {

    const [ cartList , setCartList ] =useState([])


    const agregarAlCarrito = (producto) =>{
        setCartList([...cartList, producto])
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