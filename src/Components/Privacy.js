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
        <button className="close-button" onClick={handleClose} aria-label="Close">
          ×
        </button>

        <h2>Privacy Policy – Vishwasri Technologies</h2>
        <p><strong>Last Updated:</strong> [14-10-2025]</p>

        <p>
          At <strong>Vishwasri Technologies</strong>, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how we collect, use,
          and safeguard your data for our <strong>1st Anniversary Event</strong> and related
          services.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may collect your name, email, phone number, registration details, and payment
          information (processed securely via Razorpay). We also collect technical data such as
          cookies, IP address, and browser details to improve our website and event experience.
        </p>

        <h3>Use of Information</h3>
        <p>
          Your information is used to process registrations, complete payments, send event updates,
          improve user experience, and comply with legal obligations. You may opt out of marketing
          communications at any time.
        </p>

        <h3>Payment Processing</h3>
        <p>
          Payments are processed through <strong>Razorpay</strong>, our authorized payment gateway.
          Razorpay may collect payment information such as card, UPI, or wallet details for
          transaction processing. We do not store or access your payment credentials. For details,
          please review Razorpay’s Privacy Policy at{" "}
          <a
            href="https://razorpay.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://razorpay.com/privacy/
          </a>.
        </p>

        <h3>Data Protection</h3>
        <p>
          We use industry-standard measures to protect your personal data from unauthorized access
          or disclosure. All data is stored securely and used only for legitimate purposes related
          to the event.
        </p>

        <h3>Data Sharing</h3>
        <p>
          We do not sell or rent user data. Limited information may be shared with trusted partners
          or service providers for event or payment purposes only, under confidentiality
          obligations.
        </p>

        <h3>Your Rights</h3>
        <p>
          You may request access, correction, or deletion of your data by contacting us at{" "}
          <a href="mailto:vishwasritechnologies@vishcom.info">
            vishwasritechnologies@vishcom.info
          </a>.
        </p>

        <h3>Cookies</h3>
        <p>
          Our website uses cookies to enhance functionality. You can disable them in your browser
          settings if preferred.
        </p>

        <h3>Consent</h3>
        <p>
          By registering or making a payment, you consent to this Privacy Policy and the use of your
          information as described above.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
