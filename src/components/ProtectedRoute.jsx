import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem("token");
 
  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
