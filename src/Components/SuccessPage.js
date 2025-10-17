import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SuccessPage.css";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticketData = location.state || {}; // ✅ Get dynamic data from PaymentPage

  const [ticketId] = useState("TICK" + Math.floor(Math.random() * 100000));

  return (
    <div className="success-container1">
      <button className="close-btn" onClick={() => navigate("/")}>✖</button>

      <h2>Ticket Purchase Successful</h2>
      <p>Thank you! Your ticket purchase is confirmed.</p>

      {ticketData.type && ticketData.amount ? (
        <div className="ticket-details1">
          <p><strong>Ticket ID:</strong> {ticketId}</p>
          <p><strong>Event Name:</strong> SparkFest 2025</p>
          <p><strong>Type:</strong> {ticketData.type}</p>
          <p><strong>Price:</strong> ₹{ticketData.amount}</p>
          <p><strong>Payment Method:</strong> {ticketData.paymentMethod}</p>
          <p><strong>Venue:</strong> University Post Graduate College  - Secunderabad</p>
        </div>
      ) : (
        <p>No ticket details found. Please go back and purchase a ticket.</p>
      )}
    </div>
  );
};

export default SuccessPage;
