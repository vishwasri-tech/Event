import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  // const contact = location.state?.contact;
  const navigate = useNavigate();
  const ticketData = location.state || {}; // ✅ Data from BuyTickets

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // 1️⃣ Create order on backend
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: ticketData.amount,
        name: ticketData.name || "Guest",
        type: ticketData.type,
        eventName: "SparkFest2025",
        paymentFor: "ticket",
        contact: location.state?.contact || "",
      }),
    });

    const order = await res.json();
    setLoading(false);

    // 2️⃣ Load Razorpay SDK dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: "rzp_test_RRHoCga4aLq8js", // replace with your Razorpay test key
        amount: order.amount,
        currency: order.currency,
        name: "Vishwasri Technologies",
        description: "Event Ticket Purchase",
        order_id: order.id,
        handler: async function (response) {
          console.log("Payment successful:", response);

          // 3️⃣ Verify payment on backend
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              paymentFor: "ticket",
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            navigate("/successpage", {
              state: {
                ...ticketData,
                paymentStatus: "Success",
                ticketId: verifyData.ticketId,
              },
            });
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: ticketData.name || "",
          email: ticketData.email || "",
          contact: ticketData.phone || "",
        },
        notes: {
          ticket_type: ticketData.type,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);
  };

  return (
    <div className="payment-container">
      <button className="close-btn" onClick={() => navigate(-1)}>
        ✖
      </button>

      <h2>Complete Your Ticket Purchase</h2>

      {ticketData.type && ticketData.amount ? (
        <>
          <p>
            <strong>Ticket Type:</strong> {ticketData.type}
          </p>
          <p>
            <strong>Event Name:</strong> SparkFest 2025
          </p>
          <p>
            <strong>Amount:</strong> ₹{ticketData.amount}
          </p>

          {/* <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "UPI"}
                onChange={() => setPaymentMethod("UPI")}
              />
              UPI (Google Pay / PhonePe / Paytm)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "Card"}
                onChange={() => setPaymentMethod("Card")}
              />
              Debit / Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "NetBanking"}
                onChange={() => setPaymentMethod("NetBanking")}
              />
              NetBanking
            </label>
          </div> */}

          <button
            className="pay-btn"
            onClick={handlePayment}
            disabled={loading}
          >
            Pay Now
          </button>
        </>
      ) : (
        <p>No ticket details found. Please go back and select a ticket.</p>
      )}
    </div>
  );
};

export default PaymentPage;
