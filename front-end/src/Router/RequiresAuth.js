import { useLocation, Navigate } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/register" replace state={{ from: location }} />
  );
};
