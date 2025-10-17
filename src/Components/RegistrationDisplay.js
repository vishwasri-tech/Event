// RegistrationDisplay.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RegistrationDisplay.css";

const RegistrationDisplay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  const handleClose = () => navigate(-1);

  if (!result) {
    return (
      <div className="registration-wrapper1">
        <div className="registration-container3">
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
          <h2>No Registration Found</h2>
          <p>Please check your Email or Phone Number and try again.</p>
        </div>
      </div>
    );
  }

  const { type, data } = result;

  return (
    <div className="registration-wrapper1">
      <div className="registration-container3">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>
          {type === "Competition" ? "Competition Registration" : "Stall Registration"}
        </h2>

        <div className="registration-details">
          {type === "Competition" ? (
            <>
              <p><strong>Registration ID:</strong> {data.registrationId}</p>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Competition:</strong> {data.competition}</p>
              <p><strong>Category:</strong> {data.category}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Mobile:</strong> {data.mobile}</p>
              <p><strong>Fee Paid:</strong> ₹{data.fee}</p>
              {/* <p><strong>Registered On:</strong> {new Date(data.createdAt).toLocaleString()}</p> */}
            </>
          ) : (
            <>
              <p><strong>Stall ID:</strong> {data.stallId}</p>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Competition:</strong> {data.competition}</p>
              <p><strong>Category:</strong> {data.category}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Mobile:</strong> {data.mobile}</p>
              <p><strong>Fee Paid:</strong> ₹{data.fee}</p>
              {/* <p><strong>Registered On:</strong> {new Date(data.date).toLocaleString()}</p> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationDisplay;