import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import shoppingIcon from '../assets/9004791_bag_shopping_shop_store_icon.png';

const Item = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(true);
  const navigate=useNavigate();
  const handleBuscar = () => {
    if (search) {
      
      navigate(`/resultadosBusqueda/${search}`);
    }
  };
  async function addSale() {
    try {
      const response = await fetch(`https://bazar20241109230927.azurewebsites.net//api/Products/addSale`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: id })
      });
  
      const result = await response.json();
      if (result) {
        alert("Compra realizada con éxito");
        return result;
        
      } else {
        alert("No se pudo realizar la compra. Puede que no haya stock disponible.");
        
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error al realizar la compra:", error);
      setIsLoading(false);
      
    }
    ;
  }
  

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`https://bazar20241109230927.azurewebsites.net/api/Products/items/${id}`);
        const productData = await response.json();
        console.log(productData); 
        setProducto(productData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    }

    getProduct();
  }, [id]);
  const handleClick=async()=>{
    const success=await addSale();
    if (success) {
        window.location.reload(); // Recarga la página actual
      }
    
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
     <br />
           
        <div className='container'>
        <img src={shoppingIcon} alt="Shopping Icon" className="logo"/>
        
        <br />
        <br />
        <br />
        <input  onChange={(e)=>setSearch(e.target.value)} type="text" className="input" placeholder="Buscar"/>
        {search ? (
        
        <button onClick={handleBuscar} className="button">
        Buscar
      </button>

      ) : (
        <button disabled className="button" >
          Buscar
        </button>
      )}
        </div>
        <br />
        <br />
        
      <div className="card-sell">
        
        <img src={producto.thumbnail} alt={producto.title} className="image"/>
        <div className="product-images">
        {producto.images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`${producto.title} image`}
            className="product-image"
          />
        ))}
      </div>
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
          <button onClick={() => handleClick()} className="button-compra">COMPRAR</button>
        </div>
      </div>
    </>
  );
};

export default Item;
