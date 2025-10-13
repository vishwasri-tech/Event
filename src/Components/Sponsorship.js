






import React, { useState } from "react";
import "./Sponsorship.css";
import { useNavigate } from "react-router-dom";

const Sponsorship = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    competition: "",
    email: "",
    mobile: "",
    terms: false,
  });

  const [amount, setAmount] = useState("");
  const [showPopup, setShowPopup] = useState(false); // ✅ Added state for popup

  const sponsorshipPackages = {
    Bronze: "₹50,000",
    Silver: "₹1,00,000",
    Gold: "₹3,00,000",
    Platinum: "₹4,50,000",
    "VIP Premium": "₹8,00,000",
  };

  const competitions = Object.keys(sponsorshipPackages);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "competition") {
      setAmount(sponsorshipPackages[value] || "");
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.competition || !formData.email || !formData.mobile) {
      alert("Please fill all fields before proceeding.");
      return false;
    }
    if (!formData.terms) {
      alert("Please accept the Terms and Conditions.");
      return false;
    }
    return true;
  };

  const handleSponsorshipRegistrationClick = () => {
    if (!validateForm()) return;

    // ✅ Show thank-you popup instead of navigating
    setShowPopup(true);

    // Optionally reset the form
    setFormData({
      name: "",
      competition: "",
      email: "",
      mobile: "",
      terms: false,
    });
    setAmount("");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="sponsorship">
      <div className="sponsorship-container">
        <h2 className="form-title">Sponsorship Registration</h2>

        {/* Sponsorship Info (unchanged) */}
        <div className="sponsorship-info">
          <h3>Partner With Us — Power the Celebration of Innovation!</h3>
          <p>
            Join hands with us as a valued sponsor and make your brand a part of an
            unforgettable celebration of creativity, technology, and talent.
          </p>

          <ul>
            <li><strong>Bronze (₹50,000)</strong> – Build brand awareness and enjoy stage presence.</li>
            <li><strong>Silver (₹1,00,000)</strong> – Boost your brand visibility and recognition.</li>
            <li><strong>Gold (₹3,00,000)</strong> – Gain spotlight and impactful brand awareness.</li>
            <li><strong>Platinum (₹4,50,000)</strong> – Enjoy premium benefits and expanded branding.</li>
            <li><strong>VIP Premium (₹8,00,000)</strong> – Unlock exclusive marketing privileges.</li>
          </ul>

          <h4>Join us and lead the celebration — where your brand meets opportunity!</h4>
        </div>

        {/* Sponsorship Form */}
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
              onClick={handleSponsorshipRegistrationClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Thank You!</h3>
            <p>
              Thank you for your interest in sponsoring <strong>[Event Name]</strong>.
              <br />
              Our team will get in touch with you shortly to discuss your sponsorship details.
            </p>
            <button className="close-popup" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;

