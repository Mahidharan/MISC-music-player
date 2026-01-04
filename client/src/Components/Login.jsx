import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Apple from "../assets/apple-logo.png";
import Google from "../assets/google.png";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7777/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      window.location.href = "/";
    } catch (err) {
      setError("Login failed. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>
          <span>MISC</span>
          <br />
          Where words fail, music speaks.
        </h1>
      </div>
      <div className="login-right">
        <h2>Welcome back!</h2>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
        <div className="social-login">
          <button className="google-btn">
            <img src={Google} alt="Google" className="icons" /> Google
          </button>
          <button className="apple-btn">
            <img src={Apple} alt="Apple" className="icons" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}
