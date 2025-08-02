import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '5rem', color: '#ff6b6b' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>

     
      <br />
      <Link to="/" style={{
        textDecoration: 'none',
        padding: '0.7rem 1.5rem',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px'
      }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;