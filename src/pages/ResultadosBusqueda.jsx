
import { useParams } from 'react-router-dom'
import ProductoLista from './Producto'
import { useEffect, useState } from 'react';
import shoppingIcon from '../assets/9004791_bag_shopping_shop_store_icon.png';

const ResultadosBusqueda = () => {
  const {busqueda} =useParams();
  const [search, setSearch]=useState(busqueda);
  

  
  useEffect(() => {
    setSearch(busqueda);
  }, [busqueda]);
  return (
    <>
    <br />
    
    <div className="container">
    <img src={shoppingIcon} alt="Shopping Icon" className="logo"/>
    <input onChange={(e)=>setSearch(e.target.value)} className='input' type="text" name="" id=""  placeholder='Buscar'/>
            
    </div>
    
    
    {search?
      <h1>Resultados de la busqueda de  {search}</h1>:
      <h1></h1>
      
    }
    
    <ProductoLista busqueda={search} />
    </>
    
  )
}

export default ResultadosBusqueda