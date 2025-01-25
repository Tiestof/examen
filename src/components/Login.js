import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = ({ setUsuarioAutenticado }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar usuario root en duro
    if (email === 'root@root.cl' && password === 'root') {
      setUsuarioAutenticado('root');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUsuarioAutenticado(userCredential.user.email);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="mt-5"> {/* Bootstrap: Margen superior */}
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3"> {/* Bootstrap: Margen inferior para campos del formulario */}
          <label className="form-label">Correo Electrónico</label> {/* Bootstrap: Estilo para etiquetas */}
          <input
            type="email"
            className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary"> {/* Bootstrap: Botón primario */}
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;