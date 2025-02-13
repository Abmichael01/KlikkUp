import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { Navigate, useLocation, Outlet } from "react-router";
import { useGetUser } from "@/api/queries";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  allowedRoles?: number[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles = [] }) => {
  const { toast } = useToast();
  const { user, setUser, logout } = useAuthStore();
  const location = useLocation();
  const [isCheckingPermission, setIsCheckingPermission] = useState(true);
  
  const { data, isLoading, isError } = useGetUser();

  useEffect(() => {
    if (data) {
      setUser(data);
      setIsCheckingPermission(false);
    }
  }, [data, setUser]);

  useEffect(() => {
    if (isError) {
      logout();
      toast({
        title: "Error",
        description: "Login to continue",
      });
      setIsCheckingPermission(false);
    }
  }, [isError, logout, toast]);

  if (isLoading || isCheckingPermission) {
    return <p>Loading...</p>;
  }

  if (isError || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  const hasPermission = user.roles?.some((role: number) => allowedRoles.includes(role));

  console.log('User:', user);
  console.log('Allowed Roles:', allowedRoles);
  console.log('Has Permission:', hasPermission);

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;