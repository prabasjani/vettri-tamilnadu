import { Navigate } from "react-router-dom";

import PageLoader from "@/components/loader/PageLoader";

import { useAuthContext } from "@/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useAuthContext();

  if (loading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
