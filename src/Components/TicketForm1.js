// TicketForm1.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicketForm1.css';

const TicketForm1 = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClose = () => navigate(-1);

  const handleGetTicketClick = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter your email or phone number");
      return;
    }

    try {
      //  Try to fetch Competition registration first
      let response = await fetch(`http://localhost:5000/api/registration/${input}`);
      let data = await response.json();

      if (response.ok && data) {
        // Found a competition registration
        navigate("/registrationdisplay", {
          state: { result: { type: "Competition", data } },
        });
        return;
      }

      //  If not found, check Stall registration
      response = await fetch(`http://localhost:5000/api/stalls/${input}`);
      data = await response.json();

      if (response.ok && data) {
        navigate("/registrationdisplay", {
          state: { result: { type: "Stall", data } },
        });
        return;
      }

      //  If neither found
      setError("No registration or stall found for this email/phone number");
    } catch (err) {
      console.error("Error fetching registration or stall:", err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="ticket-form-modal3">
      <div className="ticket-form-card3">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>Get Your Ticket / Registration</h2>

        <form onSubmit={handleGetTicketClick}>
          <input
            type="text"
            placeholder="Enter Your Email or Phone Number"
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

export default TicketForm1;