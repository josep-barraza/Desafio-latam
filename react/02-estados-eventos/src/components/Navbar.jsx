import { Link } from "react-router-dom";
import Miles from "./Utils";

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
      <div className="container">
        <Link className="navbar-brand text-danger fw-bold" to="/">
          🍕 Pizzería Mamaa Mia¡ 🍕
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto d-flex align-items-center gap-3">
            <Link className="nav-link text-white" to="/">🍕 Home</Link>
            <Link className="nav-link text-white" to="/profile">🧔🏼‍♂️ Profile</Link>
           
            <Link className="nav-link text-white" to="/login">🔓 Login</Link>
            <Link className="nav-link text-white" to="/register">🔐 Register</Link>
            <Link className="nav-link text-warning fw-bold" to="/card">
               {Miles(total)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;