import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import Apple from '../assets/apple-logo.png'
import Google from '../assets/google.png'

export default function Signup() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7777/signup", formData);
      console.log(response);
      navigate("/login");  // Navigate to the login page after successful signup
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1><span>MISC</span><br />Where words fail, music speaks.</h1>
      </div>
      <div className="signup-right">
        <h2>Create an account</h2>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="create-account-btn">
            Create account
          </button>
        </form>
        <div className="social-login">
          <button className="google-btn">
            <img src={Google} alt="Google" className="icons"/> Google
          </button>
          <button className="apple-btn">
            <img src={Apple} alt="Apple" className="icons"/> Apple
          </button>
        </div>
      </div>
    </div>
  );
}
