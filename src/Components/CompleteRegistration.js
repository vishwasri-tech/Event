import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CompleteRegistration.css";

const RegistrationCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // 1️⃣ Create order from backend
    const res = await fetch("/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: data.fee,
        name: data.name,
        category: data.category,
        competition: data.competition,
        eventName: "Vishwasri Technologies 1st Anniversary",
        paymentFor: "registration",
      }),
    });

    const order = await res.json();
    setLoading(false);

    // 2️⃣ Load Razorpay SDK
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: "rzp_test_RRHoCga4aLq8js", // from Razorpay dashboard (test key)
        amount: order.amount,
        currency: order.currency,
        name: "Vishwasri Technologies Anniversary",
        description: "Registration Payment",
        order_id: order.id,
        handler: async function (response) {
          console.log("Payment success:", response);
          // 🔁 Verify payment on backend
          const verifyRes = await fetch("/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              paymentMethod: "UPI", // or dynamically detect
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            navigate("/registrationsuccess", { state: data });
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: data.name,
          email: data.email || "",
          contact: data.phone || "",
        },
        notes: {
          registration_type: data.competition,
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
    <div className="registration-container">
      <div className="registration-card">
        <button className="close-btn" onClick={() => navigate(-1)}>
          ✕
        </button>
        <h2>Complete Your Registration</h2>

        <p>
          <strong>Registration Type:</strong>{" "}
          {data.competition || data.category || "—"}
        </p>
        <p>
          <strong>Participant Name:</strong> {data.name || "—"}
        </p>
        {/* <p><strong>Event:</strong> {data.competition || "—"}</p> */}
        <p>
          <strong>Amount:</strong> ₹{data.fee || "—"}
        </p>

        {/* <p><strong>Choose Payment Option:</strong></p>
        <ul className="payment-options">
          {["UPI (GooglePay/PhonePe/Paytm)", "Debit/Credit Card", "NetBanking"].map((type) => (
            <li key={type}>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value={type}
                  checked={selectedPayment === type}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                {type}
              </label>
            </li>
          ))}
        </ul> */}

        <button className="pay-btn" disabled={loading} onClick={handlePayment}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default RegistrationCard;
