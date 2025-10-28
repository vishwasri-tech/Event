import React, { useState } from "react";
import "./Sponsorship.css";
import { useNavigate } from "react-router-dom"; // ✅ import this

const Sponsorship = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const [formData, setFormData] = useState({
    name: "",
    competition: "",
    email: "",
    mobile: "",
  });

  const [, setAmount] = useState("");

  const sponsorshipPackages = {
    Bronze: "₹50,000",
    Silver: "₹1,00,000",
    Gold: "₹3,00,000",
    Platinum: "₹4,50,000",
    "VIP Premium": "₹8,00,000",
  };

  const competitions = Object.keys(sponsorshipPackages);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "competition") {
      setAmount(sponsorshipPackages[value] || "");
    }
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (
      !formData.name ||
      !formData.competition ||
      !formData.email ||
      !formData.mobile
    ) {
      alert("⚠️ Please fill all fields before proceeding.");
      return false;
    }
    if (!nameRegex.test(formData.name)) {
      alert("⚠️ Name should contain only alphabets.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      alert("⚠️ Enter a valid email address.");
      return false;
    }
    if (!mobileRegex.test(formData.mobile)) {
      alert("⚠️ Mobile number must contain 10 digits.");
      return false;
    }
    return true;
  };

  const handleSponsorshipRegistrationClick = () => {
    if (!validateForm()) return;

    // Just redirect to contact page (no backend)
    navigate("/contact-registration");
  };
  return (
    <div className="sponsorship">
      <div className="sponsorship-container">
        <h2 className="form-title">Sponsorship Registration</h2>

        <div className="sponsorship-info">
          <h3>Partner With Us — Power the Celebration of Innovation!</h3>
          <p>
            Join hands with us as a valued sponsor and make your brand a part of
            an unforgettable celebration of creativity, technology, and talent.
          </p>

          <ul>
            <li>
              <strong>Bronze (₹50,000)</strong> – Build brand awareness and
              enjoy stage presence.
            </li>
            <li>
              <strong>Silver (₹1,00,000)</strong> – Boost your brand visibility
              and recognition.
            </li>
            <li>
              <strong>Gold (₹3,00,000)</strong> – Gain spotlight and impactful
              brand awareness.
            </li>
            <li>
              <strong>Platinum (₹4,50,000)</strong> – Enjoy premium benefits and
              expanded branding.
            </li>
            <li>
              <strong>VIP Premium (₹8,00,000)</strong> – Unlock exclusive
              marketing privileges.
            </li>
          </ul>

          <h4>
            Join us and lead the celebration — where your brand meets
            opportunity!
          </h4>
        </div>

        <form>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your company or team name"
            />
          </div>

          <div className="form-group">
            <label>Sponsorship Package</label>
            <select
              name="competition"
              value={formData.competition}
              onChange={handleChange}
            >
              <option value="">Select Sponsorship Tier</option>
              {competitions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
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
              onClick={handleSponsorshipRegistrationClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sponsorship;
