import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/useAuthStore"
import { Navigate, useLocation, Outlet } from "react-router"
import { useToast } from "@/hooks/use-toast"

interface ProtectedRouteProps {
  allowedRoles?: number[]
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles = [] }) => {
  const { toast } = useToast()
  const { user, isAuthenticated, isLoading, checkAuth, logout } = useAuthStore()
  const location = useLocation()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      logout()
      toast({
        title: "Error",
        description: "Login to continue",
      })
    }
  }, [isLoading, isAuthenticated, logout, toast])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  const hasPermission = user.roles?.some((role: number) => allowedRoles.includes(role))

  console.log("User:", user)
  console.log("Allowed Roles:", allowedRoles)
  console.log("Has Permission:", hasPermission)

  if (!hasPermission) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

export default ProtectedRoute

