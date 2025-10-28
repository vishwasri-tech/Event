import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import competitions from "../assets/comp1.png";
import stalls from "../assets/comp2.png";
import sponsorship from "../assets/comp3.png";

const RegisterSection = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Competitions",
      description: [
        "Tech • Clothing • Food • Startup Pitch • Fun Games",
        "Prize money up to ₹1,00,000",
      ],
      img: competitions,
      button: "Register Now",
      path: "/register/competition",
    },
    {
      title: "Stalls",
      description: [
        "Food • Fashion • Tech • Art • Startups",
        "From ₹40,000 onwards",
      ],
      img: stalls,
      button: "Register Now",
      path: "/stalls",
    },
    {
      title: "Sponsorship",
      description: [
        "Platinum • Gold • Silver • Bronze",
        "From Brand Awareness to Overall Event Access",
      ],
      img: sponsorship,
      button: "Register Now",
      path: "/sponsorship",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="register-section">
      <h2 className="section-title">Be Part Of the Celebration</h2>

      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            {/* Image */}
            <div className="card-image">
              <img src={card.img} alt={card.title} />
            </div>

            {/* Content */}
            <div className="card-content">
              <h3>{card.title}</h3>
              <ul>
                {card.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button
                className="register-btn"
                onClick={() => handleNavigate(card.path)}
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegisterSection;
