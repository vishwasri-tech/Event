import React, { useState } from "react";
import "./Hero.css";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.png";
import bulb from "../assets/bulb.png";
import experience from "../assets/experience.png";
import network from "../assets/network.png";
import { useNavigate } from "react-router-dom";

const EventHero = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleTicketsClick = () => {
    navigate("/TicketBuy");
  };

  return (
    <div className="event-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Top Navigation */}
      <div className="top-bar">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Vishwasri Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="dropdown-menu">
          {/* Close Button */}
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/ticketform");
            }}
          >
            My Tickets
          </p>
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/ticketform1");
            }}
          >
            My Registration
          </p>
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/terms");
            }}
          >
            Terms & Conditions
          </p>
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </p>
          <p
            onClick={() => {
              setMenuOpen(false);
              navigate("/refund-policy");
            }}
          >
            Cancellation Policy
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="hero-content">
        <h1>
          Vishwasri Technologies - SparkFest 2025
          <br />
          Marking One Year of Transforming Ideas into Technology
        </h1>
        <p className="date">
          Nov 9th, 2025, 📍 University Post Graduate College - Secunderabad
        </p>
        <p className="subtext">
          <em>
            Experience innovation, networking & opportunities – all in one grand
            event.
          </em>
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-pink" onClick={handleRegisterClick}>
            Register Now
          </button>
          <button className="btn-white" onClick={handleTicketsClick}>
            Buy Tickets
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="features-bar">
        <div className="feature-item">
          <img src={bulb} alt="Innovation" className="feature-icon" />
          Innovation Competitions
        </div>
        <div className="feature-item">
          <img src={experience} alt="Experience" className="feature-icon" />
          Engaging Experiences
        </div>
        <div className="feature-item">
          <img src={network} alt="Networking" className="feature-icon" />
          Networking Opportunities
        </div>
      </div>
    </div>
  );
};

export default EventHero;
