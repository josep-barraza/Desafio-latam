import { Link } from "react-router-dom";
import Miles from "./Utils";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { UserContext } from "../context/UsertContex"; // ✅ usamos UserContext ahora

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // ✅ token + logout desde UserContext

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bold" to="/">
          🍕 Pizzería Mama Mia 🍕
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <Link className="nav-link text-white" to="/">🍕 Home</Link>

            {token ? (
              <>
                <Link className="nav-link text-white" to="/profile">🧔🏼‍♂️ Profile</Link>
                <button 
                  onClick={logout} 
                  className="btn btn-outline-light btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link text-white" to="/login">🔓 Login</Link>
                <Link className="nav-link text-white" to="/register">🔐 Register</Link>
              </>
            )}

            <Link className="nav-link text-warning fw-bold" to="/cart">
              🛒 {Miles(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




/* import { Link } from "react-router-dom";
import Miles from "./Utils";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { TokenContext } from "../context/TokenContex";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(TokenContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bold" to="/">
          🍕 Pizzería Mamaa Mia¡ 🍕
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <Link className="nav-link text-white" to="/">🍕 Home</Link>

            {token ? (
              <>
                <Link className="nav-link text-white" to="/profile">🧔🏼‍♂️ Profile</Link>
                <button onClick={logout} className="btn btn-outline-light btn-sm">Logout</button>
              </>
            ) : (
              <>
                <Link className="nav-link text-white" to="/login">🔓 Login</Link>
                <Link className="nav-link text-white" to="/register">🔐 Register</Link>
              </>
            )}

            <Link className="nav-link text-warning fw-bold" to="/card">
              🛒 {Miles(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; */