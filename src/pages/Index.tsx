
import React, { useState } from 'react';
import AuthForm from '@/components/AuthForm';
import FarewellPage from '@/components/FarewellPage';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Configuration - You can modify these names
  const fromName = "Ana";
  const toName = "Carlos";

  const handleLogin = (email: string, password: string) => {
    // Simple authentication - accepts any email and password
    // In a real application, you would validate against a backend
    if (email && password) {
      setIsAuthenticated(true);
      console.log(`User authenticated: ${email}`);
    }
  };

  if (!isAuthenticated) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return <FarewellPage fromName={fromName} toName={toName} />;
};

export default Index;
