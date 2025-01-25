import React, { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import Formulario from './components/Formulario';
import Login from './components/Login';
import SubirArchivo from './components/SubirArchivo';

const App = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [mostrarEjercicio, setMostrarEjercicio] = useState(null);

  return (
    <div className="container mt-4"> {/* Bootstrap: Contenedor principal con margen superior */}
      {usuarioAutenticado ? (
        <>
          <h1 className="text-center mb-4">Bienvenido, {usuarioAutenticado}</h1> {/* Bootstrap: Texto centrado y margen inferior */}
          <div className="text-center"> {/* Bootstrap: Centra los botones */}
            {/* Botón para mostrar el Ejercicio 1 */}
            <button
              className="btn btn-primary m-2" 
              onClick={() => setMostrarEjercicio('ejercicio1')}
            >
              Ejercicio 1
            </button>

            {/* Botón para mostrar el Ejercicio 2 */}
            <button
              className="btn btn-secondary m-2" 
              onClick={() => setMostrarEjercicio('ejercicio2')}
            >
              Ejercicio 2
            </button>

            {/* Botón para subir archivos */}
            <button
              className="btn btn-success m-2" 
              onClick={() => setMostrarEjercicio('subirArchivo')}
            >
              Ejercicio 3
            </button>
          </div>

          <div className="mt-4"> {/* Bootstrap: Margen superior para separar contenido */}
            {mostrarEjercicio === 'ejercicio1' && <ListaProductos />}
            {mostrarEjercicio === 'ejercicio2' && <Formulario />}
            {mostrarEjercicio === 'subirArchivo' && <SubirArchivo usuarioAutenticado={usuarioAutenticado} />}
          </div>
        </>
      ) : (
        <Login setUsuarioAutenticado={setUsuarioAutenticado} />
      )}
    </div>
  );
};

export default App;