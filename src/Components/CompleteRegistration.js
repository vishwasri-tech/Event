import React, { useState } from "react";

const CompleteRegistration = ({ ticketType, name, amount, onPay }) => {
  const [paymentOptions, setPaymentOptions] = useState({
    upi: true,
    card: true,
    netbanking: false,
  });

  const toggleOption = (key) => {
    setPaymentOptions({ ...paymentOptions, [key]: !paymentOptions[key] });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg w-full max-w-md relative">
        <h2 className="text-lg md:text-xl font-bold text-center mb-4">
          Complete Your Registration
        </h2>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => onPay(null)}
        >
          ✕
        </button>

        <div className="space-y-2 text-sm md:text-base text-gray-700">
          <p>
            <strong>Registration Type:</strong> Competition – {ticketType}
          </p>
          <p>
            <strong>Participant Name:</strong> {name}
          </p>
          <p>
            <strong>Amount:</strong> ₹{amount}
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Payment Options:</p>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={paymentOptions.upi}
              onChange={() => toggleOption("upi")}
              className="w-5 h-5 accent-green-600"
            />
            UPI (Google Pay / PhonePe / Paytm)
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={paymentOptions.card}
              onChange={() => toggleOption("card")}
              className="w-5 h-5 accent-green-600"
            />
            Debit / Credit Card
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={paymentOptions.netbanking}
              onChange={() => toggleOption("netbanking")}
              className="w-5 h-5 accent-green-600"
            />
            NetBanking
          </label>
        </div>

        <button
          className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition"
          onClick={() => onPay(paymentOptions)}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CompleteRegistration;
