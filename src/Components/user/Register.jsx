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
    setErrorMessage(""); // Clear any previous error messages

    try {
      console.log("Sending form data:", formData);

      // Validate form data before sending
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error("All fields are required.");
      }

      // Send request to the backend
      const response = await axios.post(`${apiUrl}/user/register`, formData);

      console.log("Server response:", response);

      if (response.status === 201) {
        alert("Check your Gmail to Register successfully!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/user/login");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      console.error("Error details:", error);

      // Check for Axios-specific errors
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);

          switch (error.response.status) {
            case 400:
              setErrorMessage("Bad request. Please check your input.");
              break;
            case 409:
              setErrorMessage("Email is already registered.");
              break;
            case 500:
              setErrorMessage("Internal server error. Please try again later.");
              break;
            default:
              setErrorMessage(
                `Error: ${
                  error.response.data.message ||
                  "An error occurred. Please try again."
                }`
              );
              break;
          }
        } else if (error.request) {
          // Request was made but no response was received
          console.error("Error request:", error.request);
          setErrorMessage(
            "No response from the server. Please check your network connection."
          );
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error message:", error.message);
          setErrorMessage(`Error: ${error.message}`);
        }
      } else {
        // Non-Axios errors
        console.error("General error:", error);
        setErrorMessage(`Error: ${error.message}`);
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
