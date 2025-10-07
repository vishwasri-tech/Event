// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketForm.css';

const TicketForm = ({ onGetTicket }) => {
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

  return (
    <div className="ticket-form-modal">
      <div className="ticket-form-card">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Get Your Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Email/Phone No"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Get My Tickets</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
