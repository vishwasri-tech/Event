import React from "react";
import { useNavigate } from "react-router-dom";
import "./Terms.css";

const TermsConditions = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back to previous page
  };

  return (
    <div className="terms-container">
      <div className="terms-card">
        <button className="close-button" onClick={handleClose} aria-label="Close">×</button>

        <h2>Terms & Conditions</h2>
        <h3>Vishwasri Technologies – Event Terms & Conditions</h3>
        <p>
          Welcome to the Vishwasri Technologies SparkFest 2025 Event. By
          registering for this Event, you agree to the following terms and
          conditions:
        </p>

        <ol>
          <li>
            <b>Registration</b>
            <ul>
              <li>All participants must register via the official event website.</li>
              <li>Registrations are confirmed only after successful payment.</li>
            </ul>
          </li>

          <li>
            <b>Participation Rules</b>
            <ul>
              <li>
                Attendees must follow event guidelines and respect event staff and other
                attendees.
              </li>
              <li>
                The organizers reserve the right to refuse entry to anyone violating rules.
              </li>
            </ul>
          </li>

          <li>
            <b>Ticket Usage</b>
            <ul>
              <li>Tickets are non–transferable unless otherwise approved by the organizer.</li>
              <li>Duplicate or altered tickets will not be accepted.</li>
            </ul>
          </li>

          <li>
            <b>Intellectual Property</b>
            <ul>
              <li>
                All event content, logos, and branding materials are the property of Vishwasri
                Technologies.
              </li>
              <li>Unauthorized use or reproduction is prohibited.</li>
            </ul>
          </li>

          <li>
            <b>Limitation of Liability</b>
            <ul>
              <li>
                Vishwasri Technologies is not responsible for any personal injury, loss, or damage
                incurred during the event.
              </li>
              <li>
                The organizer’s liability is limited to the cost of the ticket.
              </li>
            </ul>
          </li>

          <li>
            <b>Changes to the Event</b>
            <ul>
              <li>
                Vishwasri Technologies reserves the right to change the date, venue, or content of
                the event without prior notice.
              </li>
            </ul>
          </li>

          <li>
            <b>Agreement</b>
            <p>
              By registering, you agree to abide by these terms and conditions.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsConditions;
