import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [newProductosNombre, setNewProductosNombre] = useState('');
  const [newProductoPrecio, setNewProductoPrecio] = useState('');
 

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/');
      setProductos(response.data);
      
    } catch (error) {
      console.error('Error al hacer el fetch:', error);
    }
  };
  
  const agregarProducto = async () => {
    try {
      const response = await axios.post('http://localhost:3000/', {
        nombre: newProductosNombre,
        precio: newProductoPrecio
      });
      fetchProductos()
    } catch (error) {
        console.error('Error al agregar un nombre:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);
  

  return (
    <div className='container'>
      <h1 className='titulo'>Docker tp</h1>
      <div className='productos'>
        <h2>Nombres:</h2>
        <ul>
          {productos &&
            productos.map((producto,i) => (
              <li key={i}>
                Producto :{producto.nombre} Precio: {producto.precio}</li>
            ))}
        </ul>
      </div>
    
      <div className='form'>
        <h2>Agregar nombres:</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={newProductosNombre}
          onChange={(e) => setNewProductosNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProductoPrecio}
          onChange={(e) => setNewProductoPrecio(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar</button>
      </div>
    </div>
  );
};

export default App;

