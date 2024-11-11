import { useEffect, useState } from "react";
import { useNavigate,  } from "react-router-dom";

const ProductoLista = ({busqueda}) => {
  const [productos, setProductos] = useState([]);
  
  
  const navigate=useNavigate();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`https://bazar20241109230927.azurewebsites.net/api/Products/items?q=${busqueda}`);

        const lista = await response.json();

        console.log(lista); 
        setProductos(lista);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    getProducts();

  }, [busqueda]); 

  const handleClick=(producto)=>{
    navigate(`/item/${producto.id}`);
  }

  return (
    <div>
    
      {productos.length > 0 ? (
        productos.map((producto, index) => (
          <div onClick={() => handleClick(producto)} key={index} className="card" >
            <img src={producto.thumbnail} alt={producto.title} className="image"/>
            <div className="card-info">
            
            <h3>{producto.title}</h3>
            <p>Price: ${producto.price}</p>
            <p>Stock: {producto.stock}</p>
            <p>Categoria: {producto.category}</p>
            <p>Descripcion: {producto.description}</p>
            <p>
              Rating: {producto.rating}{" "}
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>
                  {i < Math.floor(producto.rating) ? "★" : "☆"}
                </span>
              ))}
            </p>
            </div>
            
          </div>
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ProductoLista;
