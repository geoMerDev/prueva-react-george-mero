import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token; // Convertir token en booleano
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};