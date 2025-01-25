import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const SubirArchivo = ({ usuarioAutenticado }) => {
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  const subirArchivo = () => {
    if (!archivo) {
      setMensaje('Por favor, seleccione un archivo.');
      return;
    }

    const archivoRef = ref(storage, `archivos/${usuarioAutenticado}/${archivo.name}`);
    const uploadTask = uploadBytesResumable(archivoRef, archivo);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setMensaje(`Progreso: ${progreso.toFixed(2)}%`);
      },
      (error) => {
        console.error('Error al subir archivo:', error);
        setMensaje('Error al subir archivo.');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setMensaje(`Archivo subido con éxito. URL: ${url}`);
        });
      }
    );
  };

  return (
    <div>
      <h2>Subir Archivo</h2>
      <div className="mb-3"> {/* Bootstrap: Margen inferior */}
        <label className="form-label">Seleccione un archivo</label>
        <input
          type="file"
          className="form-control" 
          onChange={handleArchivo}
        />
      </div>
      <button className="btn btn-primary" onClick={subirArchivo}> {/* Bootstrap: Botón primario */}
        Subir Archivo
      </button>
      {mensaje && <p className="mt-3">{mensaje}</p>} {/* Bootstrap: Margen superior para el mensaje */}
    </div>
  );
};

export default SubirArchivo;