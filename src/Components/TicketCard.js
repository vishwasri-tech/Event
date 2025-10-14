import React from "react";
import { useNavigate } from "react-router-dom";
import "./TicketCard.css";

const TicketCard = () => {
  const navigate = useNavigate();

  // Handle close button
  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="myticket-container">
      <div className="myticket-card">
        <button className="myticket-close-btn" onClick={handleClose}>
          ×
        </button>
        <h2 className="myticket-title">My Ticket</h2>

        <div className="myticket-details">
          <p><span>Ticket ID:</span> TICK12345</p>
          <p><span>Event Name:</span> Anniversary Event</p>
          <p><span>Type:</span> Couple</p>
          <p><span>Price:</span> ₹9798</p>
          <p><span>Venue:</span> Vishwasri Technologies Campus</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
