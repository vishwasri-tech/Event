import React from "react";
import "./Register1.css";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const RegisterPage1 = () => {
     const navigate = useNavigate(); 

      const handleRegister1Click = () => {
        
    navigate("/register/competition"); 
  };
     const handleStallsClick = () => {
        
    navigate("/stalls"); 
  };
     const handleSponsorshipClick = () => {
        
    navigate("/sponsorship");
  };
  return (
    <div className="register-page1">
      <div className="register-container">
        <h2 className="register-title">Register Now</h2>

        <div className="register-options">
          <button className="register-option" onClick={handleRegister1Click}>
            <span>Competitions</span>
            <FaChevronRight className="icon" />
          </button>

          <button className="register-option" onClick={handleStallsClick}>
            <span>Stalls</span>
            <FaChevronRight className="icon" />
          </button>

          <button className="register-option" onClick={handleSponsorshipClick}>
            <span>Sponsorship</span>
            <FaChevronRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage1;
