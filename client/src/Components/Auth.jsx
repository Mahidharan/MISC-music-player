import React, { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login toggle={() => setIsLogin(false)} />
      ) : (
        <Signup toggle={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Auth;
