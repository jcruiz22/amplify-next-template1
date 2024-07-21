'use client';
import React, { createContext, useContext, useState, useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Ensure state changes are handled properly with useEffect
  useEffect(() => {
    if (user && !isAuthenticated) {
      setIsAuthenticated(true);
    } else if (!user && isAuthenticated) {
      setIsAuthenticated(false);
    }
  }, [user, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <Authenticator hideSignUp>
        {({ user: authUser }) => {
          if (authUser && !isAuthenticated) {
            setIsAuthenticated(true);
            setUser(authUser);
          }
          if (!authUser && isAuthenticated) {
            setIsAuthenticated(false);
            setUser(null);
          }
          // Render children after ensuring state is updated
          return children;
        }}
      </Authenticator>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
