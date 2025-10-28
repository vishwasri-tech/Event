import React from "react";
import "./WhyAttend.css";
import { useNavigate } from "react-router-dom";

import startupsIcon from "../assets/startups.png";
import studentsIcon from "../assets/students.png";
import familiesIcon from "../assets/families.png";
import foodiesIcon from "../assets/foodies.png";
import kidsZoneImg from "../assets/kidszone.png";

const WhyAttend = () => {
  const navigate = useNavigate();
  const handleTicketFormClick = () => {
    navigate("/TicketBuy");
  };
  return (
    <section className="why-attend-section">
      <h2 className="why-title">Why Attend?</h2>
      <p className="why-subtitle">
        An event that isn’t just about celebration – it’s about creating
        connections, unlocking opportunities, and sharing unforgettable moments.
      </p>

      {/* Grid */}
      <div className="why-grid">
        <div className="why-item">
          <div className="line" />
          <img src={startupsIcon} alt="Startups" className="icon" />
          <div className="text">
            <h4>For Startups</h4>
            <p>Branding, stalls, investor connects, and idea pitching.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="line" />
          <img src={studentsIcon} alt="Students" className="icon" />
          <div className="text">
            <h4>For Students</h4>
            <p>
              Showcase your talent, gain mentorship, and participate in
              competitions.
            </p>
          </div>
        </div>

        <div className="why-item">
          <div className="line" />
          <img src={familiesIcon} alt="Families" className="icon" />
          <div className="text">
            <h4>For Families</h4>
            <p>Food, shopping, cultural shows, and fun activities for kids.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="line" />
          <img src={foodiesIcon} alt="Foodies" className="icon" />
          <div className="text">
            <h4>For Foodies</h4>
            <p>
              Live food shows, tasting sessions, and exciting food challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Kids Zone (Full background, centered content) */}
      <div className="kids-zone">
        <div className="kids-zone-inner">
          <div className="kids-zone-text">
            <h3>Kids Zone</h3>
            <p>
              A day bursting with joy - creative workshops, exciting games, art
              corners, STEM experiments, cultural performances, treasure hunts,
              obstacle courses, and surprise fun activities. A platform for
              young minds to explore, learn, imagine, and turn their ideas into
              reality.
            </p>
            <button className="fun-btn" onClick={handleTicketFormClick}>
              Join the Fun!
            </button>
          </div>
          <div className="kids-zone-img">
            <img src={kidsZoneImg} alt="Kids Zone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
