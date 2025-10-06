import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./Registrationsuccess.css";

const RegistrationSuccess1 = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        {/* Close Button */}
        <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

        {/* Title */}
        <h2 className="success-title">Registration Successful</h2>

        <p className="success-message">
          Thank you, Rohit! Your registration is confirmed.
        </p>

        {/* Details */}
        <div className="details">
          <strong>Registration ID:</strong> <span>REG12345</span>
          <strong>Event Name:</strong> <span>Vishwasri Technologies 1st Anniversary</span>
          <strong>Category:</strong> <span>Competition</span>
          <strong>Competition Name:</strong> <span>Coding Challenge</span>
          <strong>Fee Paid:</strong> <span>₹855</span>
          <strong>Venue:</strong> <span>Vishwasri Technologies Campus</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess1;
