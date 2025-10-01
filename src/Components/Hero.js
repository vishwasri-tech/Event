import React from "react";
import "./Hero.css";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.png";

const EventHero = () => {
  return (
    <div
      className="event-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top Logo */}
      <div className="logo-container">
        <img src={logo} alt="Vishwasri Logo" />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1>Vishwasri Technologies<br />Celebrating 1 Year of Innovation</h1>
        <p className="date">Nov 13th, 2025, 📍 Event Venue</p>
        <p className="subtext">
          <em>Experience innovation, networking & opportunities – all in one grand event.</em>
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn-pink">Register Now</button>
          <button className="btn-white">Buy Tickets</button>
        </div>
      </div>

      {/* Features */}
      <div className="features-bar">
        <div className="feature-item">
          <span role="img" aria-label="bulb">💡</span> Innovation Competitions
        </div>
        <div className="feature-item">
          <span role="img" aria-label="experience">🤝</span> Engaging Experiences
        </div>
        <div className="feature-item">
          <span role="img" aria-label="network">👥</span> Networking Opportunities
        </div>
      </div>
    </div>
  );
};

export default EventHero;
