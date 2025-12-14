import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { authToken, loading } = useAuth();

  if (loading) return null;  // prevent flicker

  if (!authToken) return <Navigate to="/login" />;

  return children;
}
