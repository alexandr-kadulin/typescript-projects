import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { ProtectedRouteProps } from "../types";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useContext(AppContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
