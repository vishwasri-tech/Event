import React, { useState } from "react";
import "./Register2.css";
import { useNavigate } from "react-router-dom"; 

const RegisterPage2 = () => {
  const navigate = useNavigate(); 
  const handlePaymentClick = () => {
        
    navigate("/completeregistration"); // ✅ Navigate to RegisterPage1 route
  };
  const [formData, setFormData] = useState({
    name: "",
    competition: "",
    email: "",
    mobile: "",
    terms: false,
  });

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
                <option key={c}>{c}</option>
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
            <button type="button" className="submit-btn" onClick={handlePaymentClick}>
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage2;
