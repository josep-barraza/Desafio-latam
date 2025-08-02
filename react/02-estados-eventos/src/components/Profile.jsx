import React from 'react';


const Profile = ({ email, onLogout }) => {



  
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px", maxWidth: "300px", margin: "0 auto", textAlign: "center" }}>
      <h3>Perfil de Usuario</h3>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={onLogout} style={{ padding: "0.5rem 1rem", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px" }}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;