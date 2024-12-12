import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./User.css";
import apiUrl from "../utils/GetApiUrl";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill in name, email, and password to register.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${apiUrl}/user/create-user`, {
        name,
        email,
        password,
      });
      toast.success("OTP sent to your email! Verify it.");
      setOtpSent(true);
    } catch (error) {
      let errorMessage = error.message;
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message;
      }
      toast.error(
        <div>
          <b>Failed to send OTP!</b>
          <p>{errorMessage}</p>
        </div>
      );
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerify = async (event) => {
    event.preventDefault();
    if (!otp) {
      toast.error("Please enter OTP to verify.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${apiUrl}/user/verify-otp`, {
        email,
        otp,
      });
      toast.success("OTP verified successfully!");
      setOtpVerified(true);
      setTimeout(() => navigate("/user/login"), 2000);
    } catch (error) {
      let errorMessage = error.message;
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message;
      }
      toast.error(
        <div>
          <b>Failed to verify OTP!</b>
          <p>{errorMessage}</p>
        </div>
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user-signup">
        <h1>Sign Up</h1>
        <form onSubmit={otpVerified ? null : handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          {otpSent && !otpVerified && (
            <input
              type="number"
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              placeholder="Enter OTP"
            />
          )}
          {otpSent && !otpVerified && (
            <button onClick={handleOtpVerify}>Verify OTP</button>
          )}
          {!otpSent && (
            <button type="submit">
              {loading ? <p>Loading...</p> : "Sign Up"}
            </button>
          )}
          <p>
            Already have an account?{" "}
            <Link to="/user/login">Try logging in.</Link>
          </p>
        </form>
      </div>
    </>
  );
}
