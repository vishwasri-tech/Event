import React, { useState } from "react";
import "./Sponsorship.css";
import { useNavigate } from "react-router-dom"; 


const Sponsorship = () => {
  const navigate = useNavigate(); 
  const handleSponsorshipRegistrationClick = () => {
        
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
    "Platinum",
    "Gold",
    "Silver",
    "Bronze",
   
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="sponsorship">
      <div className="sponsorship-container">
        <h2 className="form-title">Sponsorship Registration</h2>

        <form>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name or team name"
            />
          </div>

          <div className="form-group">
            <label>Sponsorship Package</label>
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
            <label>Contact Name</label>
            <input
              type="text"
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
            <button type="button" className="submit-btn" onClick={handleSponsorshipRegistrationClick}>
              Proceed To Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sponsorship;
