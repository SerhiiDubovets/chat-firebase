import { ReactNode } from "react";

export interface ProtectedRouteProps {
  children: ReactNode;
  redirectPath?: string;
  isAuthenticated: boolean;
}
