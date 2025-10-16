// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyTickets.css';

const TicketBuy = ({ onGetTicket }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate(); // React Router hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // ✅ Navigate to ticket page and pass contact info
      navigate("/tickets", { state: { contact: input } });
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="ticket-form-modal1">
      <div className="ticket-form-card1">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Buy Tickets</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Email/Phone No"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TicketBuy;
