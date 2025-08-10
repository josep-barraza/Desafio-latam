import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Pizza from "./components/pages/Pizza";
import Cart from "./components/pages/card";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import CartProvider from "./context/CartContex";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/card" element={<Cart />} />
          <Route
            path="/profile"
            element={
              <Profile
                email="usuario@ejemplo.com"
                onLogout={() => alert("Sesión cerrada")}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer fin="@ 2025 - Pizzería Mama Mia¡ - Todos los derechos reservados" />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;