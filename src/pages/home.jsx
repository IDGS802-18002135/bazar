import { useState } from "react";
import { useNavigate } from "react-router-dom";
import shoppingIcon from '../assets/9004791_bag_shopping_shop_store_icon.png';



const Home = () => {
  const [busqueda, setBusqueda]=useState('');
  const navigate=useNavigate();
  

  const handleBuscar = () => {
    if (busqueda) {
      
      navigate(`/resultadosBusqueda/${busqueda}`);
    }
  };
  return (
    <>
    <br />
            <br />
            <br />
        <img src={shoppingIcon} alt="Shopping Icon" className="logo"/>
        <h1>Bazar online</h1>
            <br />
            <br />
            <br />
            <input onChange={(e)=>setBusqueda(e.target.value)} type="text" className="input" placeholder="Buscar"/>
            <br />
            <br />
            <br />

            {busqueda ? (
        
        <button onClick={handleBuscar} className="button">
        Buscar
      </button>

      ) : (
        <button disabled className="button" >
          Buscar
        </button>
      )}
            
        
    </>
    
  )
}

export default Home;