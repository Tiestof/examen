import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* Información del producto */}
      <span>{producto.nombre} - ${producto.precio}</span>
      {/* Botón para agregar al carrito */}
      <button
        className="btn btn-success btn-sm"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al Carrito
      </button>
    </li>
  );
};

export default Producto;