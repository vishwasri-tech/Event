import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Tickets.css";

const BuyTickets = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Couple");

  const ticketPrices = {
    Single: 499,
    Couple: 950,
    "Family (4)": 1849,
    VIP: 2499,
  };

  // Handle Proceed Button
  const handleProceed = () => {
    const basePrice = ticketPrices[selected];
    const totalWithGST = Math.round(basePrice * 1.18); // ✅ Include 18% GST
    const ticketData = { type: selected, amount: totalWithGST };

    // ✅ Pass data to PaymentPage dynamically
    navigate("/paymentpage", { state: ticketData });
  };

  return (
    <div className="ticket-container">
      {/* Close Button */}
      <button className="close-btn" onClick={() => navigate(-1)}>✖</button>

      <h2>Buy Tickets</h2>

      <div className="ticket-options">
        {Object.keys(ticketPrices).map((type) => (
          <label key={type} className="ticket-option">
            <input
              type="radio"
              name="ticketType"
              checked={selected === type}
              onChange={() => setSelected(type)}
            />
            {type} - ₹{ticketPrices[type]}
          </label>
        ))}
      </div>

      <button className="proceed-btn" onClick={handleProceed}>
        Proceed To Payment
      </button>
    </div>
  );
};

export default BuyTickets;
