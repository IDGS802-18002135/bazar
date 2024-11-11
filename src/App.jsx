
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultadosBusqueda from './pages/ResultadosBusqueda'
import Item from './pages/Item'
import Ventas from './pages/Ventas'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resultadosBusqueda/:busqueda" element={<ResultadosBusqueda/>}/>
        <Route path="/resultadosBusqueda" element={<ResultadosBusqueda/>}/>
        <Route path="/item/:id" element={<Item/>}/>
        <Route path="/sales" element={<Ventas/>}/>

        
        
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
