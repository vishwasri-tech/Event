import React from "react";
import "./Register.css"; 
import competitions from "../assets/competitions.png";
import stalls from "../assets/stalls.png";
import sponsorship from "../assets/sponsorship.png";

const RegisterSection = () => {
  const cards = [
    {
      title: "Competitions",
      description: [
        "Tech • Clothing • Food • Startup Pitch • Fun Games",
        "Prizes up to ₹50,000",
      ],
      img: competitions, 
      button: "Register Now",
    },
    {
      title: "Stalls",
      description: [
        "Food • Fashion • Tech • Art • Startups",
        "From ₹30,000 onwards",
      ],
      img: stalls, 
      button: "Register Now",
    },
    {
      title: "Sponsorship",
      description: [
        "Platinum • Gold • Silver • Bronze",
        "Stage Mentions • Branding • Stalls • Promotions",
      ],
      img: sponsorship, 
      button: "Register Now",
    },
  ];

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

              <button className="register-btn">{card.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegisterSection;
