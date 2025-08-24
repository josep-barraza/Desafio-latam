import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

import { useContext } from "react";
import UserProvider from "./context/UsertContex";
import { UserContext } from "./context/UsertContex";

// 🔒 Ruta protegida (requiere login)
const ProtectedRoute = ({ children, redirectTo }) => {
  const { token } = useContext(UserContext);
  return token ? children : <Navigate to={redirectTo} />;
};

// 🚪 Redirige si ya está logueado (ej: login / register)
const AuthRedirect = ({ children }) => {
  const { token } = useContext(UserContext);
  return token ? <Navigate to="/" /> : children;
};

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <AuthRedirect>
                  <Login />
                </AuthRedirect>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRedirect>
                  <Register />
                </AuthRedirect>
              }
            />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />

            {/* Rutas privadas */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/login">
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Página no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer fin="@ 2025 - Pizzería Mama Mia¡ - Todos los derechos reservados" />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;