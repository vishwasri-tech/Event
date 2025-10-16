// RegistrationDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationDisplay.css';

const RegistrationDisplay = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Navigate back
  };

  const registration = {
    id: 'REG12345',
    eventName: 'Vishwasri Technologies 1st Anniversary',
    category: 'Competition',
    competitionName: 'Coding Challenge',
    feePaid: '₹855',
    venue: ' University Post Graduate College  - Secunderabad'
  };

  return (
    <div className="registration-wrapper1">
    <div className="registration-container3">
      <button className="close-button" onClick={handleClose}>&times;</button>
      <h2>My Registration</h2>
      <div className="registration-details">
        <p><strong>Registration ID:</strong> {registration.id}</p>
        <p><strong>Event Name:</strong> {registration.eventName}</p>
        <p><strong>Category:</strong> {registration.category}</p>
        <p><strong>Competition Name:</strong> {registration.competitionName}</p>
        <p><strong>Fee Paid:</strong> {registration.feePaid}</p>
        <p><strong>Venue:</strong> {registration.venue}</p>
      </div>
    </div>
    </div>
  );
};

export default RegistrationDisplay;
