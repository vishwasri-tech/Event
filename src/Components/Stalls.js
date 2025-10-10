








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
    terms: false,
  });

  const competitions = ["Food", "Clothing", "Tech", "Art", "Startup"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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

  const handleStallsClick = () => {
    if (!validateForm()) return;

    const baseFee = 40000;
    const feeWithGST = (baseFee * 1.18).toFixed(2);

    navigate("/completeregistration", {
      state: {
        ...formData,
        fee: feeWithGST,
        category: "Stall",
      },
    });
  };

  return (
    <div className="stalls">
      <div className="stalls-container">
        <h2 className="form-title">Stall Registration</h2>

        {/* ✅ Your Original Stalls Info (Unchanged) */}
        <div className="stall-info">
          <h3>Book Your Stall — Showcase, Sell & Shine!</h3>
          <p>
            Be part of the grand celebration by setting up your own stall! Whether you’re into 
            <strong> Food, Fashion, Tech, Art, or Startups</strong>, this is your chance to 
            connect with thousands of visitors, showcase your creativity, and grow your brand 
            visibility. Each stall is crafted to help you make an impact — with the 
            <strong> best marketing strategy provided throughout the event.</strong>
          </p>

          <p className="highlight"><strong>Every stall starting from ₹40,000</strong></p>

          <ul>
            <li><strong>Food Stalls</strong> – Serve your best dishes, attract food lovers, and be part of the city’s most vibrant culinary experience.</li>
            <li><strong>Clothing Stalls</strong> – Display your latest designs, connect with trendsetters, and make your brand the talk of the event.</li>
            <li><strong>Tech Stalls</strong> – Present your innovations, interact with tech enthusiasts, and build your network with potential collaborators.</li>
            <li><strong>Art Stalls</strong> – Showcase your creativity, sell your work, and inspire visitors through your artistic expression.</li>
            <li><strong>Startup Stalls</strong> – Pitch your idea, promote your business, and gain visibility among investors and entrepreneurs.</li>
          </ul>

          <p>
            Every stall includes <strong>branding opportunities, marketing visibility, and full-day event access</strong> — helping you reach more customers than ever.
          </p>

          <p className="highlight">
            <strong>Showcase your brand, connect with thousands — Register your stall today!</strong>
          </p>
        </div>

        {/* ✅ Stall Form Section */}
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
              <option value="">Select Competition</option>
              {competitions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Registration Fee</label>
            <input
              type="text"
              name="fee"
              value="₹40,000"
              readOnly
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
              onClick={handleStallsClick}
            >
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stalls;
