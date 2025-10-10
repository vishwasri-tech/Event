









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

    const baseAmount = parseInt(amount.replace(/[₹,]/g, "")) || 0;
    const amountWithGST = (baseAmount * 1.18).toFixed(2);

    navigate("/completeregistration", {
      state: {
        ...formData,
        fee: amountWithGST,
        category: "Sponsorship",
      },
    });
  };

  return (
    <div className="sponsorship">
      <div className="sponsorship-container">
        <h2 className="form-title">Sponsorship Registration</h2>

        {/* ✅ Your Original Sponsorship Content (Unchanged) */}
        <div className="sponsorship-info">
          <h3>Partner With Us — Power the Celebration of Innovation!</h3>
          <p>
            Join hands with us as a valued sponsor and make your brand a part of an
            unforgettable celebration of creativity, technology, and talent. Each
            sponsorship tier is crafted to give your business maximum visibility,
            credibility, and engagement — with the best marketing strategy provided
            throughout the event.
          </p>

          <ul>
            <li>
              <strong>Bronze (₹50,000)</strong> – Build <strong>brand awareness</strong>, enjoy{" "}
              <strong>stage presence</strong>, and connect directly with audiences
              through event branding.
            </li>
            <li>
              <strong>Silver (₹1,00,000)</strong> – Boost your{" "}
              <strong>brand visibility</strong> with <strong>stage mentions</strong>,
              logo highlights, and strong recognition across major event zones.
            </li>
            <li>
              <strong>Gold (₹3,00,000)</strong> – Gain spotlight with{" "}
              <strong>problem statement participation, stage presence</strong>, and impactful{" "}
              <strong>brand awareness</strong>.
            </li>
            <li>
              <strong>Platinum (₹4,50,000)</strong> – Receive{" "}
              <strong>premium services from VT</strong>, contribute{" "}
              <strong>problem statements</strong>, and enjoy expanded branding and stage time.
            </li>
            <li>
              <strong>VIP Premium (₹8,00,000)</strong> – Unlock{" "}
              <strong>complete event access, VIP lounge privileges</strong>, and{" "}
              <strong>exclusive marketing benefits</strong> that amplify your brand throughout
              the celebration.
            </li>
          </ul>

          <p>
            Every sponsorship comes with <strong>strategic marketing support</strong> —
            ensuring your brand reaches the right audience and leaves a lasting impression.
          </p>

          <h4>
            Join us and lead the celebration — where your brand meets opportunity!
          </h4>
        </div>

        {/* ✅ Sponsorship Form */}
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
            <label>Sponsorship Amount</label>
            <input type="text" readOnly value={amount} placeholder="Auto-filled" />
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
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sponsorship;
