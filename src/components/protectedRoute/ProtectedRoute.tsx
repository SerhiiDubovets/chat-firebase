import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "./protectedRoute.types";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  redirectPath = "/",
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
