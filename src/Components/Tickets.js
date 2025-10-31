import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Tickets.css";

const BuyTickets = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get contact from previous page
  const contact = location.state?.contact || ""; // ✅ extract contact
  const [selected, setSelected] = useState("Couple");

  const ticketPrices = {
    Single: 199,
    Couple: 349,
    "Family (3 + 1)": 699,
    VIP: 1999,
  };

  // Handle Proceed Button
  const handleProceed = () => {
    const basePrice = ticketPrices[selected];
    const totalWithGST = Math.round(basePrice * 1.18); // ✅ Include 18% GST
    const ticketData = {
      type: selected,
      amount: totalWithGST,
      contact: contact,
    };

    // ✅ Pass data to PaymentPage dynamically
    navigate("/paymentpage", { state: ticketData });
  };

  return (
    <div className="ticket-container">
      {/* Close Button */}
      <button className="close-btn" onClick={() => navigate(-1)}>
        ✖
      </button>

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
