import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContex";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { token } = useContext(TokenContext);
  return token ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;