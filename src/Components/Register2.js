import React, { useState } from "react";
import "./Register2.css";
import { useNavigate } from "react-router-dom";

const RegisterPage2 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    competition: "",
    email: "",
    mobile: "",
    fee: "",
  });

  const [loading, setLoading] = useState(false);

  // Competition Prices
  const competitionPrices = {
    Tech: 1000,
    Clothing: 1500,
    Food: 1000,
    "Startup Pitch": 3500,
    "Fun Competition": 1500,
  };

  const competitions = Object.keys(competitionPrices);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "competition") {
      setFormData({
        ...formData,
        competition: value,
        fee: competitionPrices[value] || "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      alert("⚠️ Name is required.");
      return false;
    }
    if (!nameRegex.test(formData.name)) {
      alert("⚠️ Name should contain only alphabets and spaces.");
      return false;
    }
    if (!formData.competition) {
      alert("⚠️ Please select a competition.");
      return false;
    }
    if (!formData.email.trim()) {
      alert("⚠️ Email is required.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert("⚠️ Please enter a valid email address.");
      return false;
    }
    if (!formData.mobile.trim()) {
      alert("⚠️ Mobile number is required.");
      return false;
    }
    if (!mobileRegex.test(formData.mobile)) {
      alert("⚠️ Mobile number should have only 10 digits.");
      return false;
    }

    return true;
  };

  const handlePaymentClick = async () => {
    if (!validateForm()) return;

    setLoading(true);
    const baseFee = Number(formData.fee);
    const totalFee = baseFee;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          competition: formData.competition,
          email: formData.email,
          mobile: formData.mobile,
          category: "Competition",
          fee: totalFee.toFixed(2),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registration Successful!");
        navigate("/completeregistration", {
          state: {
            name: formData.name,
            competition: formData.competition,
            email: formData.email,
            mobile: formData.mobile,
            category: "Competition",
            fee: totalFee.toFixed(2),
            registrationId: data.registrationId,
          },
        });
      } else {
        alert(`❌ ${data.message || "Registration failed!"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page2">
      <div className="register2-container">
        <h2 className="form-title">Competition Registration</h2>

        <div className="showcase-section">
          <h3>Showcase Your Talent — Compete & Win Big!</h3>
          <p>
            Step into the spotlight and prove your skills across four exciting
            competitions —{" "}
            <strong>Tech, Clothing, Food, and Startup Pitching.</strong>
          </p>
          <p>
            Bring your ideas, creativity, and innovation to life and stand a
            chance to win exciting prizes and recognition!
          </p>

          <ul>
            <li>
              <strong>Tech Competition</strong> – Solve real–world problem
              statements and win <strong>₹1,00,000</strong>.
            </li>
            <li>
              <strong>Clothing Competition</strong> – Unleash your creativity in
              fashion design and win <strong>₹25,000</strong>.
            </li>
            <li>
              <strong>Food Competition</strong> – Cook up your best recipe and
              win <strong>₹20,000</strong>.
            </li>
            <li>
              <strong>Startup Pitching</strong> – Present your idea and win
              <strong> funding up to ₹5 Lakhs</strong>.
            </li>
          </ul>

          <p className="highlight">
            Registration fees start as low as <strong>₹1,000</strong> — don’t
            wait! This is your chance to shine, connect, and compete at
            <strong> Vishwasri Technologies’ grand celebration!</strong>
          </p>
          <p>
            <strong>Register now and let your talent take the stage!</strong>
          </p>
        </div>

        <form>
          <div className="form-group">
            <label>Name / Team Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name or team name"
            />
          </div>

          <div className="form-group">
            <label>Competition Name</label>
            <select
              name="competition"
              value={formData.competition}
              onChange={handleChange}
            >
              <option value="">Select Competition</option>
              {competitions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Registration Fee</label>
            <input
              type="text"
              name="fee"
              value={formData.fee ? `₹${formData.fee}` : ""}
              readOnly
              placeholder="*(Auto-calculated based on selection)"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </div>

          <div className="button-container">
            <button
              type="button"
              className="submit-btn"
              onClick={handlePaymentClick}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Proceed to pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage2;
