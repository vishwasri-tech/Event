import React from "react";
import { Phone, Mail } from "lucide-react";
import "./ContactRegistration.css";

const ContactRegistration = () => {
  return (
    <div className="contact-registration">
      <div className="contact-card">
        <h2>Contact us to Registration</h2>
        <p className="subtitle">
          Get Your Stall Space Now! Contact Us For Quick Registration.
        </p>

        <div className="contact-details">
          <p>
            <Phone className="icon" />{" "}
            <a
              href="https://wa.me/919908208857"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              99082 08857
            </a>
            ,{" "}
            <a
              href="https://wa.me/919347850568"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              93478 50568
            </a>
          </p>
          <p>
            <Mail className="icon" />{" "}
            <a
              href="mailto:Vishwasritechnologies@Vishcom.Info"
              className="email-link"
            >
              Vishwasritechnologies@Vishcom.Info
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactRegistration;
