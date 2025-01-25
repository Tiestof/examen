import React, { useState } from 'react';
import Producto from './Producto';

const ListaProductos = () => {
  // lista de productos
  const [productos] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10000 }, // Producto 1 con precio
    { id: 2, nombre: 'Producto 2', precio: 20000 }, // Producto 2 con precio
    { id: 3, nombre: 'Producto 3', precio: 30000 }, // Producto 3 con precio
  ]);

  // Estado para manejar el carro
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  // Actualizamos el estado usando el método setCarrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]); // Agregamos un producto al carrito
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul className="list-group">
        {/* Utilizamos map() para recorrer y renderizar cada producto */}
        {productos.map((producto) => (
          <Producto
            key={producto.id} // Clave única para cada producto
            producto={producto} // Se pasa el producto como prop al componente hijo
            agregarAlCarrito={agregarAlCarrito} // Callback para comunicación hijo-padre
          />
        ))}
      </ul>
      <h3 className="mt-4">Carrito:</h3>
      <ul className="list-group">
        {/* Renderiza el contenido del carrito */}
        {carrito.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.nombre} - ${item.precio} {/* Muestra nombre y precio del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProductos;
