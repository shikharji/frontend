import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        formData
      );
      if (response.status === 200) {
        setErrorMessage("Login successful!");
        alert("Login successful!");
        localStorage.setItem("Token", response.data.user._id);
        navigate("/user");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            error.response.data.message ||
              "Invalid credentials. Please try again."
          );
        }
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <>
      <div className="register-form-wrapper">
        <form onSubmit={handleSubmit} id="login-form">
          <p class="login-form-title">Sign in to your account</p>
          <div class="login-input-container">
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span></span>
          </div>
          <div class="login-input-container">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {loading && (
            <svg id="register-loading" viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>
          )}
          <button type="submit" class="login-submit">
            Sign in
          </button>

          <p class="login-signup-link">
            No account?
            <Link to="/user/register">Sign up</Link>
          </p>
        </form>
      </div>
      {errorMessage && (
        <div className="error-message-container">
          <h1 className="error-message">{errorMessage}</h1>
        </div>
      )}
    </>
  );
}
