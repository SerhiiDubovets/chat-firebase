import { Navigate } from "react-router-dom";

import LoadingMain from "@/components/loaders/loadingMain/LoadingMain";
import { useUserStore } from "@/store/userStore";
import { ProtectedRouteProps } from "./protectedRoute.types";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  redirectPath = "/",
}: ProtectedRouteProps) => {
  const { isLoading, userLoading } = useUserStore();

  if (isLoading || userLoading) {
    return <LoadingMain />;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
