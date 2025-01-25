import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Formulario = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [validator] = useState(new SimpleReactValidator());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      try {
        // Crear usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // Guardar los datos adicionales en Firestore
        await addDoc(collection(db, 'usuarios'), {
          uid: user.uid,
          email: user.email,
        });

        alert('Usuario creado correctamente y datos almacenados en Firestore');
        setFormData({ email: '', password: '' }); // Reinicia el formulario
      } catch (error) {
        console.error('Error al crear usuario:', error);
        alert('Error al crear el usuario. Inténtalo nuevamente.');
      }
    } else {
      validator.showMessages();
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3"> {/* Bootstrap: Margen inferior para los campos */}
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {validator.message('email', formData.email, 'required|email')}
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
          {validator.message('password', formData.password, 'required|min:6')}
        </div>
        <button type="submit" className="btn btn-primary"> {/* Bootstrap: Botón primario */}
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default Formulario;