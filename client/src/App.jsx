import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Components/Signup";
import MainContent from "./Components/MainContent";
import Login from "./Components/Login";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set initial state to false
  const [loading, setIsLoading] = useState(true);

  
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:7777/verify-token",{},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

   

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return isAuthenticated ? (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
