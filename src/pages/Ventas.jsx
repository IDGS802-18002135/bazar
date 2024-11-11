import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    async function fetchVentas() {
      try {
        const response = await fetch('https://bazar20241109230927.azurewebsites.net/api/Products/sales');
        const data = await response.json();
        setVentas(data);
      } catch (error) {
        console.error('Error al obtener las ventas:', error);
      }
    }

    fetchVentas();
  }, []);

  const handleClick=()=>{
   
   
        navigate("/");
      
    
  }

  return (
   <>
      <h1>Compras registradas</h1>
      <div className="cards-container">

        {ventas.length > 0 ? (
        ventas.map((venta) => (
          <div key={venta.id} className="card-sell">
            <img src={venta.image} alt={venta.productTitle} className="image" />
            <div className="card-info">
            <h3>{venta.productTitle}</h3>
            <p>Cantidad: {venta.quantity}</p>
            <p>Precio Total: ${venta.totalPrice.toFixed(2)}</p>
            <p>Fecha de Venta: {new Date(venta.saleDate).toLocaleDateString()}</p>

            </div>
            
          </div>
      
      
        ))
      ) : (
        <p>No hay ventas registradas.</p>
      )}
      </div>

      <button onClick={() => handleClick()} className="button">Salir</button>
    </>
  );
};

export default Ventas;
