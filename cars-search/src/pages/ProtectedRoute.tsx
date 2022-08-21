import { Navigate } from "react-router-dom";
// import { useAppContext } from "../context/appContext";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // const { user } = useAppContext();

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  const user = "user";

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
