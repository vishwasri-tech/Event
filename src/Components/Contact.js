import React from "react";
import "./Contact.css";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/mail.png";

const ContactSection = () => {
  return (
    <div className="contact-section">
      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>We’re Here To Help You…...</p>

        <div className="info-list">
          <div className="info-item">
            <img src={phone} alt="Phone" className="icon-img" />
            <span className="info-text">73306 69716, 93478 50568</span>
          </div>

          <div className="info-item">
            <img src={whatsapp} alt="WhatsApp" className="icon-img" />
            <span className="info-text">Chat On Whatsapp</span>
          </div>

          <div className="info-item">
            <img src={email} alt="Email" className="icon-img" />
            <span className="info-text">vishwasritechnologies@vishcom.Info</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required />
          </div>

          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
