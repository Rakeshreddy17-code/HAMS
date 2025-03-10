import { ReactNode, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

interface PrivateRouteProps {
  children?: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!user && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser) {
          setUser(parsedUser); // Restore user from localStorage
        }
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user"); // Remove invalid data
      }
    }
  }, [user, setUser]);

  return user ? children || <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
