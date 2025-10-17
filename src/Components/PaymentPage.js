import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketData = location.state || {}; // ✅ Data from BuyTickets

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const handleSuccessClick = () => {
    // ✅ Pass ticketData + paymentMethod to SuccessPage
    navigate("/successpage", { state: { ...ticketData, paymentMethod } });
  };

  return (
    <div className="payment-container">
      <button className="close-btn" onClick={() => navigate(-1)}>✖</button>

      <h2>Complete Your Ticket Purchase</h2>

      {ticketData.type && ticketData.amount ? (
        <>
          <p><strong>Ticket Type:</strong> {ticketData.type}</p>
          <p><strong>Event Name:</strong> SparkFest 2025</p>
          <p><strong>Amount:</strong> ₹{ticketData.amount}</p>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "UPI"}
                onChange={() => setPaymentMethod("UPI")}
              />
              UPI (Google Pay / PhonePe / Paytm)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "Card"}
                onChange={() => setPaymentMethod("Card")}
              />
              Debit / Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "NetBanking"}
                onChange={() => setPaymentMethod("NetBanking")}
              />
              NetBanking
            </label>
          </div>

          <button className="pay-btn" onClick={handleSuccessClick}>
            Pay Now
          </button>
        </>
      ) : (
        <p>No ticket details found. Please go back and select a ticket.</p>
      )}
    </div>
  );
};

export default PaymentPage;
