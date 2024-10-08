import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./User.css";
import apiUrl from "../utils/GetApiUrl";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
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
    setErrorMessage("");

    try {
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error("All fields are required.");
      }

      const response = await axios.post(`${apiUrl}/user/register`, formData);

      // Check if the response status is 409 to handle the "Email already exists" error
      if (response.status === 201) {
        alert("Check your Gmail to Register successfully!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/user/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email already exist");
        setErrorMessage(error.response.data.message);
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="register-form-wrapper">
        <div className="register-form-box">
          <form className="register-form" onSubmit={handleSubmit}>
            <span className="register-title">Sign up</span>
            <span className="register-subtitle">
              Create a free account with your email.
            </span>
            <div className="register-form-container">
              <input
                type="text"
                class="input"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                class="input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                class="input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>{" "}
            {loading && (
              <div className="loading-container">
                <svg id="register-loading" viewBox="25 25 50 50">
                  <circle r="20" cy="50" cx="50"></circle>
                </svg>
              </div>
            )}
            <button type="submit">Sign up</button>
          </form>

          <div className="register-form-section">
            <p>
              Have an account? <Link to="/user/login">Log in</Link>{" "}
            </p>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div className="error-message-container">
          <h1 className="error-message">{errorMessage}</h1>
        </div>
      )}
    </>
  );
}
