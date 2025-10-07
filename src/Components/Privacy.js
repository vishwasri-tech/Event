import React from "react";
import { useNavigate } from "react-router-dom";
import "./Privacy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate to previous page
  };

  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <button className="close-button" onClick={handleClose} aria-label="Close">×</button>

        <h2>Privacy Policy</h2>
        <h3>Vishwasri Technologies – Privacy Policy</h3>
        <p>
          At Vishwasri Technologies, we value your privacy. This Privacy Policy explains how we
          collect, use, and protect your personal information for the 1st Anniversary Event.
        </p>

        <ol>
          <li>
            <b>Information We Collect</b>
            <ul>
              <li>Name, email, phone number, payment details, registration details.</li>
              <li>Cookies and usage data for website functionality.</li>
            </ul>
          </li>

          <li>
            <b>Use of Information</b>
            <ul>
              <li>To process event registrations and payments.</li>
              <li>To send event updates, reminders, and marketing communications.</li>
              <li>To improve event experience and website functionality.</li>
            </ul>
          </li>

          <li>
            <b>Data Protection</b>
            <ul>
              <li>We use industry–standard security measures to protect your data.</li>
              <li>Personal data is stored securely and only used for event purposes.</li>
            </ul>
          </li>

          <li>
            <b>Data Sharing</b>
            <ul>
              <li>We do not sell or rent your data.</li>
              <li>Data may be shared with event partners for event–related purposes only.</li>
            </ul>
          </li>

          <li>
            <b>Your Rights</b>
            <ul>
              <li>You can request access, correction, or deletion of your personal data.</li>
              <li>
                Contact us at vishwasritechnologies@vishcom.info for any privacy concerns.
              </li>
            </ul>
          </li>

          <li>
            <b>Cookies</b>
            <ul>
              <li>Our website uses cookies to enhance user experience.</li>
              <li>You may choose to disable cookies in your browser settings.</li>
            </ul>
          </li>
        </ol>

        <p>By registering for the event, you consent to this Privacy Policy.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
