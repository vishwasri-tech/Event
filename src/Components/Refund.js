import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Refund.css';

const RefundPolicy = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="refund-policy-container">
      <div className="policy-box">
        <button className="close-button" onClick={handleClose}>×</button>

        <h2>Refund / Cancellation Policy</h2>

        <h3>Vishwasri Technologies – Refund & Cancellation Policy</h3>
        <p>We strive to ensure our events run smoothly and transparently. Please read this policy carefully before registering for the SparkFest 2025 Event.</p>

        <h4>Cancellation by Participant</h4>
        <ul>
          <li>All registrations are final and binding.</li>
          <li>Once payment has been made, <strong>no refunds</strong> will be issued under any circumstances, including but not limited to change of personal schedule, illness, travel delays, or dissatisfaction with event content.</li>
          <li>Ticket transfers to another person may be permitted only upon written request to <a href="mailto:vishwasritechnologies@vishcom.info">vishwasritechnologies@vishcom.info</a> and must be approved by the organizer at least 3 days before the event.</li>
        </ul>

        <h4>Cancellation or Changes by Organizer</h4>
        <ul>
          <li>In the unlikely event that the organizer cancels the event, participants will be offered either:
            <ul>
              <li>Transfer of their registration to a rescheduled date, or</li>
              <li>Credit for an equivalent future event.</li>
            </ul>
          </li>
          <li>No monetary refunds will be issued.</li>
          <li>Vishwasri Technologies reserves the right to change the event program, speakers, venue, or schedule at any time without prior notice, and such changes do not qualify for refunds.</li>
        </ul>

        <h4>Event Attendance and Conduct</h4>
        <ul>
          <li>Participants are responsible for arriving on time and complying with event guidelines.</li>
          <li>Failure to attend the event for any reason will not qualify for any form of refund or credit.</li>
          <li>Disruptive behavior or violation of event rules may result in removal from the venue without refund.</li>
        </ul>

        <p><strong>By completing your registration, you acknowledge that you have read, understood, and agreed to this No Refund & Cancellation Policy.</strong></p>
      </div>
    </div>
  );
};

export default RefundPolicy;
