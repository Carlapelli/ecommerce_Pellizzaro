import { useState, useContext, createContext } from 'react'

const CartContext = createContext ([])

export const useCartContext = () => useContext (CartContext)


const CartContextProvider = ({children}) => {

    const [ cartList , setCartList ] =useState([])

    //Adds productos to cart, if the same product is selected, it adds in quantity
    const addToCart = (producto) =>{

        const index = cartList.findIndex(prod => prod.id === producto.id)
        
            if (index != -1) {
                let firstQuant = cartList[index].cantidad
                cartList[index].cantidad = firstQuant + producto.cantidad
                setCartList([...cartList])
            }
            else {
                setCartList([...cartList, producto])
            } 
    }

    //Sets the cart in 0
    const emptyCart = () => {
        setCartList ([])
    }

    //Gives the total price to pay 
    const totalPrice =() =>{
        return cartList.reduce ( (acum, prod) => acum += (prod.precio * prod.cantidad), 0)
    }

    //Gives the number of prods selectec, it appears next to the CartWidget in NavBar
    const amountOfProds = () =>{
        return cartList.reduce ((count,prod)=> count += prod.cantidad,0)
    }

    //Deletes each of the products selected in cart
    const deleteItem = (id) =>{
        setCartList (cartList.filter(prod=> prod.id != id))
    }

    return (
        <CartContext.Provider value ={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            amountOfProds,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider