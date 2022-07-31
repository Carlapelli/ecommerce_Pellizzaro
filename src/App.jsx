import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from "./components/Cart/cart"
import Titulo from "./components/Titulo/Titulo"
import CartContextProvider from "./Context/CartContext"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Titulo titulo= "Mi Ecommerce ♥"/>
        <Routes>
          <Route index path="/" element={<ItemListContainer subtitulo="Bienvenid@ a mi página de diseños!"/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer subtitulo ="Productos Seleccionados"/>}/>          
          <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
          <Route path ="/cart" element ={<Cart />}/>
          <Route path ="*" element ={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
