




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "./CompleteRegistration.css";

const RegistrationCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  const [selectedPayment, setSelectedPayment] = useState("");

  const handleSuccessmodalClick = () => {
    navigate("/registrationsuccess", { state: data });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <button className="close-btn" onClick={() => navigate(-1)}>✕</button>
        <h2>Complete Your Registration</h2>

        <p><strong>Registration Type:</strong>  {data.competition || data.category || "—"}</p>
        <p><strong>Participant Name:</strong> {data.name || "—"}</p>
        {/* <p><strong>Event:</strong> {data.competition || "—"}</p> */}
        <p><strong>Amount:</strong> ₹{data.fee || "—"}</p>

        <p><strong>Choose Payment Option:</strong></p>
        <ul className="payment-options">
          {["UPI (GooglePay/PhonePe/Paytm)", "Debit/Credit Card", "NetBanking"].map((type) => (
            <li key={type}>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value={type}
                  checked={selectedPayment === type}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                {type}
              </label>
            </li>
          ))}
        </ul>

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
