import type React from "react";
import { useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router";
import { useCheckAuth } from "@/hooks/useCheckAuth"; // Import React Query hook
import { useAuthStore } from "@/stores/useAuthStore";
import { useToast } from "@/hooks/use-toast";
import PageLoading from "@/components/PageLoading";

interface ProtectedRouteProps {
  allowedRoles?: number[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles = [] }) => {
  const { toast } = useToast();
  const location = useLocation();
  const { user, isAuthenticated, isLoading } = useCheckAuth(); // Use React Query hook
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      logout();
      toast({
        title: "Error",
        description: "Login to continue",
      });
    }
  }, [isLoading, isAuthenticated, logout, toast]);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  const hasPermission = user.roles?.some((role: number) => allowedRoles.includes(role));

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
