import React from "react";
import "./WhatsHappening.css";
import { useNavigate } from "react-router-dom";

import competitionsIcon from "../assets/competition1.png";
import stallsIcon from "../assets/stall.png";
import familyIcon from "../assets/family.png";
import networkingIcon from "../assets/network.png";
import ticketPhone from "../assets/phn.png";
import djIcon from "../assets/music.png";

const WhatsHappening = () => {
    const navigate = useNavigate();
     const handleTicketFormClick = () => {
    navigate("/TicketBuy");
  };
  return (
    <div className="whats-happening-section">
      <div className="whats-happening">
        <h1>What’s Happening?</h1>
        <p>Get ready for a day packed with energy, creativity, and celebration! From exciting competitions in tech, food, clothing, and startups to vibrant stalls showcasing fashion, art, and innovation — there’s something for everyone. Enjoy family fun zones, cultural performances, live music, and an electrifying DJ night that will keep the celebration going till late! 🎶 Join us, experience the vibe, and be part of a grand celebration that inspires, connects, and entertains  all in one place!</p>

        <div className="event-list">
          <div className="event-item">
            <img src={competitionsIcon} alt="Competitions" />
            <p><strong>Competitions</strong> <span>(Tech • Food • Clothing • Startup Pitch • Fun)</span></p>
          </div>

          <div className="event-item">
            <img src={stallsIcon} alt="Stalls" />
            <p><strong>Stalls</strong> <span>(Food • Fashion • Tech • Art • Startups)</span></p>
          </div>
           <div className="event-item">
            <img src={djIcon} alt="Dj night" />
            <p><strong>DJ Night</strong> <span>(Music • Dance • Celebrations)</span></p>
          </div>

         

          <div className="event-item">
            <img src={networkingIcon} alt="Networking" />
            <p><strong>Networking</strong> <span>(Entrepreneurs • Innovators • Sponsors)</span></p>
          </div>
           <div className="event-item">
            <img src={familyIcon} alt="Family Fun" />
            <p><strong>Family Fun</strong> <span>(Kids’ Zone • Cultural Shows • Live Performances)</span></p>
          </div>
        </div>
      </div>

      {/* Ticket Pass Section */}
      <div className="ticket-section">
        <div className="ticket-text">
          <h3>Choose the Right Pass for Your Celebration</h3>
          <p>
            Get your pass and be part of an unforgettable celebration! Your ticket gives you entry to explore exciting stalls, enjoy fun games, and groove to the DJ beats as the evening comes alive. Whether you come solo, with friends, or family, it’s your chance to experience a day full of vibrant energy, music, and memories. Don’t miss out 
— join the celebration! 🎟️🎶
          </p>
          <button className="ticket-btn" onClick= {handleTicketFormClick} >Grab Your Ticket</button>
        </div>

        <div className="ticket-image">
          <img src={ticketPhone} alt="Ticket on Mobile" />
        </div>
      </div>
    </div>
  );
};

export default WhatsHappening;
