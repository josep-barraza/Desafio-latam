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
import TokenProvider,{TokenContext} from "./context/TokenContex";
import { useContext } from "react";

// Ruta protegida: solo entra si token es true
const ProtectedRoute = ({ children, redirectTo }) => {
  const { token } = useContext(TokenContext);
  return token ? children : <Navigate to={redirectTo} />;
};

// Redirección si ya está logueado
const AuthRedirect = ({ children }) => {
  const { token } = useContext(TokenContext);
  return token ? <Navigate to="/" /> : children;
};

function App() {
  return (
    <TokenProvider>
      <CartProvider>
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
            <Route path="/card" element={<Cart />} />

            {/* Ruta protegida */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute redirectTo="/login">
                  <Profile email="usuario@ejemplo.com" />
                </ProtectedRoute>
              }
            />

            {/* Página no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer fin="@ 2025 - Pizzería Mama Mia¡ - Todos los derechos reservados" />
        </BrowserRouter>
      </CartProvider>
    </TokenProvider>
  );
}

export default App;