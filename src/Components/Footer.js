// src/components/Footer.js
import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

// ✅ Import local images instead of react-icons
import facebookIcon from "../assets/fb.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Description */}
        <div className="footer-logo">
          <img src={logo} alt="Vishwasri Logo" />
          <p>
            A Platform Where Ideas Meet Opportunities. <br />
            Focused On Growth, Collaboration, And Meaningful <br />
            Impact Through Technology And Innovation.
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h4>Let's get social :</h4>
          <div className="social-icons">
            <a href="#">
              <img src={facebookIcon} alt="Facebook" className="social-img" />
            </a>
            <a href="#">
              <img src={instagramIcon} alt="Instagram" className="social-img" />
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
            </a>
          
          </div>
        </div>
      </div>

      <p className="footer-bottom">
        © 2025 Vishwasri Technologies – All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
