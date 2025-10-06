import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./CompleteRegistration.css";

const RegistrationCard = () => {
  const handleSuccessmodalClick= () => {
        
    navigate("/registrationsuccess"); // ✅ Navigate to RegisterPage1 route
  };


  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <div className="registration-container">
      <div className="registration-card">
        {/* Close Button */}
        <button className="close-btn" onClick={() => navigate(-1)}>
          ✕
        </button>

        {/* Title */}
        <h2>Complete Your Registration</h2>

        {/* Details */}
        <p><strong>Registration Type:</strong> Competition – Tech Hackathon</p>
        <p><strong>Participant Name:</strong> Rohit Kumar</p>
        <p><strong>Amount:</strong> ₹855</p>

        {/* Payment Options */}
        <p><strong>Choose Payment Option:</strong></p>
        <ul className="payment-options">
          <li>
            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={selectedPayment === "upi"}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              UPI (Google Pay / PhonePe / Paytm)
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={selectedPayment === "card"}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              Debit / Credit Card
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={selectedPayment === "netbanking"}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              NetBanking
            </label>
          </li>
        </ul>

        {/* Pay Button */}
        <button
          className="pay-btn"
          disabled={!selectedPayment}
         onClick={handleSuccessmodalClick}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default RegistrationCard;
