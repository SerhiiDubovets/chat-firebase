import { Navigate } from "react-router-dom";

import { useUserStore } from "@features/user/store/userStore";

import LoadingMain from "@shared/ui/loadingMain/LoadingMain";

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
