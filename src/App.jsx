import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className='App'>
      <NavBar />
      <Titulo titulo= "Mi Ecommerce ♥"/>
      <ItemListContainer subtitulo= "Bienvenid@ a mi página de diseños!"/>
    </div>
  )
}

export default App
