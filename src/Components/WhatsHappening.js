import React from "react";
import "./WhatsHappening.css";

import competitionsIcon from "../assets/bulb.png";
import stallsIcon from "../assets/bulb.png";
import familyIcon from "../assets/bulb.png";
import networkingIcon from "../assets/bulb.png";
import ticketPhone from "../assets/phn.png";

const WhatsHappening = () => {
  return (
    <div className="whats-happening-section">
      <div className="whats-happening">
        <h1>What’s Happening?</h1>

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
            <img src={familyIcon} alt="Family Fun" />
            <p><strong>Family Fun</strong> <span>(Kids’ Zone • Cultural Shows • Live Performances)</span></p>
          </div>

          <div className="event-item">
            <img src={networkingIcon} alt="Networking" />
            <p><strong>Networking</strong> <span>(Entrepreneurs • Innovators • Sponsors)</span></p>
          </div>
        </div>
      </div>

      {/* Ticket Pass Section */}
      <div className="ticket-section">
        <div className="ticket-text">
          <h3>Choose the Right Pass for Your Celebration</h3>
          <p>
            Whether you’re coming solo, as a couple, with family, or want a premium VIP experience,
            we have tickets tailored for everyone. Enjoy full access to competitions, stalls, entertainment, and more.
          </p>
          <button className="ticket-btn">Grab Your Ticket</button>
        </div>

        <div className="ticket-image">
          <img src={ticketPhone} alt="Ticket on Mobile" />
        </div>
      </div>
    </div>
  );
};

export default WhatsHappening;
