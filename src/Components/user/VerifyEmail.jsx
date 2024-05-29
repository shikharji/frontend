import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/verify-email/${token}`
        );
        console.log("Response:", response);
        setMessage(response.data.message);
        setLoading(false);
        setTimeout(() => {
          navigate("/user/login");
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        setMessage("Invalid or expired token");
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);
  return (
    <>
      <h1>Email Verification</h1>
      {loading ? (
        <div id="verify-email-loader"></div>
      ) : (
        <>
          <h2>{message}</h2>
          <p>
            Thank you for verifying your email. Email verification is an
            important step to ensure the security and integrity of your account.
          </p>
          <p>
            Please contact support if you encounter any issues with email
            verification.
          </p>
        </>
      )}
    </>
  );
}
