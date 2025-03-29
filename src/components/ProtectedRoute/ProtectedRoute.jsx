import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/authSlice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
