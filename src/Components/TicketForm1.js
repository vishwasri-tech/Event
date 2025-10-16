// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketForm1.css';

const TicketForm1 = ({ onGetTicket }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate(); // React Router hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onGetTicket(input);
    }
  };

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };
   const handleGetTicketClick = () => {
    // ✅ Pass ticketData + paymentMethod to SuccessPage
    navigate("/registrationdisplay", );
  };

  return (
    <div className="ticket-form-modal3">
      <div className="ticket-form-card3">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Get Your Ticket/Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Email/Phone No"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleGetTicketClick}>Get My Tickets</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm1;
