
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
    terms: false,
  });

  const [loading, setLoading] = useState(false);

  const competitions = [
    "Tech",
    "Clothing",
    "Food",
    "Startup Pitch",
    "Fun Competition",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

   const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/; // alphabets + spaces only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // standard email pattern
    const mobileRegex = /^[0-9]{10}$/; // only 10 digits

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
    if (!formData.terms) {
      alert("⚠️ Please accept the Terms and Conditions.");
      return false;
    }

    return true; // ✅ all checks passed
  };

  const handlePaymentClick = async () => {
    // Run validation before submission
    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch("http://192.168.1.6:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(" Registration successful!");
        navigate("/completeregistration"); // Navigate after success
      } else {
        alert(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert(" Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page2">
      <div className="register2-container">
        <h2 className="form-title">Competition Registration</h2>

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
            <label>Competitions Name</label>
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

          <div className="form-group terms">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              &nbsp; * Terms and Conditions
            </label>
          </div>

          <div className="button-container">
            <button
              type="button"
              className="submit-btn"
              onClick={handlePaymentClick}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Proceed To Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage2;

