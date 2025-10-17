// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyTickets.css';

const TicketBuy = ({ onGetTicket }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate(); // React Router hook

    const isValidEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Checks if it's exactly 10 digits
    return /^[0-9]{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      alert("Please enter your email or phone number.");
      return;
    }

    //  Validate email or phone
    if (!isValidEmail(trimmedInput) && !isValidPhone(trimmedInput)) {
      alert("Please enter a valid email address or a 10-digit phone number.");
      return;
    }

    //  Navigate to ticket page and pass contact info
    navigate("/tickets", { state: { contact: trimmedInput } });
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