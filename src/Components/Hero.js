// import React from "react";
// import "./Hero.css";
// import bgImage from "../assets/bg.png";
// import logo from "../assets/logo.png";
// import bulb from "../assets/bulb.png";
// import experience from "../assets/experience.png";
// import network from "../assets/network.png";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

// const EventHero = () => {
//   const navigate = useNavigate(); // ✅ Initialize navigation hook

//   const handleRegisterClick = () => {
//     navigate("/register"); // ✅ Navigate to RegisterPage1 route
//   };
//       const handleTicketsClick = () => {
        
//     navigate("/tickets"); 
//   };

//   return (
//     <div
//       className="event-hero"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Top Logo */}
//       <div className="logo-container">
//         <img src={logo} alt="Vishwasri Logo" />
//       </div>

//       {/* Main Content */}
//       <div className="hero-content">
//         <h1>
//           Vishwasri Technologies
//           <br />
//           Celebrating 1 Year of Innovation
//         </h1>
//         <p className="date">Nov 13th, 2025, 📍 Event Venue</p>
//         <p className="subtext">
//           <em>
//             Experience innovation, networking & opportunities – all in one
//             grand event.
//           </em>
//         </p>

//         {/* CTA Buttons */}
//         <div className="cta-buttons">
//           <button className="btn-pink" onClick={handleRegisterClick}>
//             Register Now
//           </button>
//           <button className="btn-white" onClick={handleTicketsClick}>Buy Tickets</button>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="features-bar">
//         <div className="feature-item">
//           <img src={bulb} alt="Innovation" className="feature-icon" />
//           Innovation Competitions
//         </div>
//         <div className="feature-item">
//           <img src={experience} alt="Experience" className="feature-icon" />
//           Engaging Experiences
//         </div>
//         <div className="feature-item">
//           <img src={network} alt="Networking" className="feature-icon" />
//           Networking Opportunities
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventHero;




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
    navigate("/tickets");
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

          <p onClick={() => { setMenuOpen(false); navigate("/tickets"); }}>
            My Tickets
          </p>
          <p onClick={() => { setMenuOpen(false); navigate("/register"); }}>
            My Registration
          </p>
          <p onClick={() => { setMenuOpen(false); navigate("/terms"); }}>
            Terms & Conditions
          </p>
          <p onClick={() => { setMenuOpen(false); navigate("/privacy"); }}>
            Privacy Policy
          </p>
          <p onClick={() => { setMenuOpen(false); navigate("/cancellation"); }}>
            Cancellation Policy
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="hero-content">
        <h1>
          Vishwasri Technologies
          <br />
          Celebrating 1 Year of Innovation
        </h1>
        <p className="date">Nov 13th, 2025, 📍 Event Venue</p>
        <p className="subtext">
          <em>
            Experience innovation, networking & opportunities – all in one
            grand event.
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
