import type React from "react";
import { useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";
import PageLoading from "@/components/PageLoading";
import { getUser } from "@/api/apiEndpoints";
import { toast } from "sonner";

interface ProtectedRouteProps {
  allowedRoles?: number[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles = [] }) => {
  const location = useLocation();
  const { user, isAuthenticated, isLoading, logout, setUser } = useAuthStore();

  // Call checkAuth on mount
  useEffect(() => {
      const fetchUser = async () => {
          const response = await getUser();
          setUser(response);
      };
      fetchUser();
  }, [setUser]);

  // Handle unauthenticated state
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      
      logout();
      toast.error("You are not authenticated. Please log in again.",)
    }
  }, [isLoading, isAuthenticated, logout, toast]);
  if (isLoading) {
    return <PageLoading />;
  }

  // Redirect to login page if the user is not authenticated
  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Check if the user has the required permissions
  const hasPermission = user?.roles?.some((role: number) => allowedRoles.includes(role));

  console.log(hasPermission)
  console.log(user)
  console.log(isAuthenticated)

  // Redirect to unauthorized page if the user lacks permissions
  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Render the protected route's children
  return <Outlet />;
};

export default ProtectedRoute;