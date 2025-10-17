// TicketForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketForm.css';

const TicketForm = ({ onGetTicket }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router hook

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };
   const handleGetTicketClick = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter your email or phone number");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/ticket/${input}`);
      const data = await response.json();

      if (response.ok && data) {
        // ✅ Navigate to TicketCard with fetched ticket data
        navigate("/ticketcard", { state: { ticket: data } });
      } else {
        setError(data.message || "No ticket found for this email/phone number");
      }
    } catch (err) {
      console.error("Error fetching ticket:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="ticket-form-modal">
      <div className="ticket-form-card">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Get Your Ticket/Registration</h2>
        <form onSubmit={handleGetTicketClick}>
          <input
            type="text"
            placeholder="Enter Your Email/Phone No"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Get My Tickets</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default TicketForm;
