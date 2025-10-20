import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // In a real app, you would check authentication status
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Example check

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;