import React, { useState } from "react";

const BuyTickets = ({ onProceed }) => {
  const [selected, setSelected] = useState("Couple");

  const tickets = [
    { type: "Single", price: 199 },
    { type: "Couple", price: 349 },
    { type: "Family (4+Kid)", price: 899 },
    { type: "VIP", price: "Premium Perks" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-lg md:text-xl font-bold text-center mb-6">
          Buy Tickets
        </h2>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <label
              key={ticket.type}
              className="flex items-center justify-between cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected === ticket.type}
                onChange={() => setSelected(ticket.type)}
                className="w-5 h-5 accent-pink-600"
              />
              <span className="flex-1 ml-2 text-gray-800">{ticket.type}</span>
              <span className="text-gray-600">
                {typeof ticket.price === "number" ? `₹${ticket.price}` : ticket.price}
              </span>
            </label>
          ))}
        </div>

        <button
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition"
          onClick={() => onProceed(selected)}
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default BuyTickets;
