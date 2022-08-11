import { useState, useContext, createContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({children}) => {

    const [ cartList , setCartList ] =useState([])

    const addToCart = (producto) =>{

        const index = cartList.findIndex(prod => prod.id === producto.id)
        
            if (index != -1) {
                let primeraCant = cartList[index].cantidad
                cartList[index].cantidad = primeraCant + producto.cantidad
                setCartList([...cartList])
            }
            else {
                setCartList([...cartList, producto])
            } 
    }

    const emptyCart = () => {
        setCartList ([])
    }

    const totalPrice =() =>{
        return cartList.reduce ( (acum, prod) => acum += (prod.precio * prod.cantidad), 0)
    }

    const cantidadProds = () =>{
        return cartList.reduce ((cont,prod)=> cont += prod.cantidad,0)
    }

    const deleteItem = (id) =>{
        setCartList (cartList.filter(prod=> prod.id != id))
    }

    return (
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            cantidadProds,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider