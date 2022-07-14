import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar />
      <Titulo titulo= "Mi Ecommerce ♥"/>
      <ItemListContainer subtitulo= "Bienvenid@ a mi página de diseños!"/>
    </div>
  )
}

export default App
