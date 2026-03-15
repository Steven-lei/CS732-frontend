import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

//navigate to login page if user is not loged
export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  if (!user) {
    return <h4>The content is protected, login to start</h4>;
  }

  return <>{children}</>;
};
