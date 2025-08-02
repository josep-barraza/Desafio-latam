

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState(""); // success / error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !contraseña) {
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje("error");
      return;
    }

    if (contraseña.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje("error");
      return;
    }

  
    setMensaje("Registro exitoso.");
    setTipoMensaje("success");

    setEmail("");
    setContraseña("");
   
  };

  return (
    <div className="container d-flex justify-content-center ">
      <div className="col-md-6">
        <div className="card shadow p-4 rounded">
          <h2 className="text-center mb-4" style={{color : "white"}}>Login</h2>

          {mensaje && (
            <div
              className={`alert ${
                tipoMensaje === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{color : "white"}}>
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-text" style={{color : "white"}}>
                Nunca compartiremos tu correo con nadie más.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label" style={{color : "white"}}>
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Mínimo 6 caracteres"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>

      

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;










