




import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Registrationsuccess.css";

const RegistrationSuccess1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="success-container">
      <div className="success-card">
        <button className="close-btn" onClick={() => navigate("/")}>✕</button>
        <h2 className="success-title">Registration Successful</h2>

        <p className="success-message">
          Thank you, {data.name || "Participant"}! Your registration is confirmed.
        </p>

        <div className="details">
          <strong>Registration ID:</strong> <span>REG{Math.floor(Math.random() * 100000)}</span>
          <strong>Event Name:</strong> <span>SparkFest 2025</span>
          <strong>Category:</strong> <span>{data.category || "Competition"}</span>
          <strong>Competition:</strong> <span>{data.competition || "—"}</span>
          <strong>Fee Paid:</strong> <span>₹{data.fee || "—"}</span>
          {/* <strong>Email:</strong> <span>{data.email || "—"}</span>
          <strong>Mobile:</strong> <span>{data.mobile || "—"}</span> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess1;
