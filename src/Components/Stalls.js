import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stalls.css";

const Stalls = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    competition: "",
    email: "",
    mobile: "",
  });

  const competitions = ["Food", "Clothing", "Tech", "Art", "Startup"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      alert("⚠️ Please select a stall category.");
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
      alert("⚠️ Mobile number should be 10 digits only.");
      return false;
    }

    return true;
  };

  const handleStallsClick = async () => {
    if (!validateForm()) return;

    const baseFee = 40000;

    const stallData = {
      name: formData.name,
      competition: formData.competition,
      email: formData.email,
      mobile: formData.mobile,
      fee: baseFee,
      category: "Stall",
    };

    try {
      console.log("✅ Stall data captured:", stallData);
      navigate("/contact-registration");
    } catch (error) {
      console.error("❌ Error while registering stall:", error);
      alert(
        "Something went wrong while registering your stall. Please try again."
      );
    }
  };

  return (
    <div className="stalls">
      <div className="stalls-container">
        <h2 className="form-title">Stall Registration</h2>

        <div className="stall-info">
          <h3>Book Your Stall — Showcase, Sell & Shine!</h3>
          <p>
            Be part of the grand celebration by setting up your own stall!
            Whether you’re into
            <strong> Food, Fashion, Tech, Art, or Startups</strong>, this is
            your chance to connect with thousands of visitors, showcase your
            creativity, and grow your brand visibility.
          </p>

          <p className="highlight">
            <strong>Every stall starting from ₹40,000</strong>
          </p>
        </div>

        <form>
          <div className="form-group">
            <label>Stall Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name or team name"
            />
          </div>

          <div className="form-group">
            <label>Stall Category</label>
            <select
              name="competition"
              value={formData.competition}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {competitions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
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
              onClick={handleStallsClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stalls;
