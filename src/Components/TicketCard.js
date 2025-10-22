import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TicketCard.css";

const TicketCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ticketData = location.state?.ticket; // ✅ Get ticket data from navigate()

  // Handle close button
  const handleClose = () => {
    navigate(-1);
  };

  if (!ticketData) {
    return (
      <div className="myticket-container">
        <div className="myticket-card">
          <button className="myticket-close-btn" onClick={handleClose}>
            ×
          </button>
          <h2 className="myticket-title">No Ticket Found</h2>
          <p>Please check your email or phone number and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="myticket-container">
      <div className="myticket-card">
        <button className="myticket-close-btn" onClick={handleClose}>
          ×
        </button>
        <h2 className="myticket-title">My Ticket</h2>

        <div className="myticket-details">
          <p><span>Ticket ID:</span> {ticketData.ticketId}</p>
          {/* <p><span>Event Name:</span> {ticketData.eventName}</p> */}
          <p><span>Type:</span> {ticketData.type}</p>
          <p><span>Price:</span> ₹{ticketData.amount}</p>
          {/* <p><span>Contact:</span> {ticketData.contact}</p> */}
          <p><span>Status:</span> {ticketData.status}</p>
          {/* <p><span>Payment Date:</span> {new Date(ticketData.paymentTime).toLocaleString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
