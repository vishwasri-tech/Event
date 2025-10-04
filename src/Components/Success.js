import React from "react";

const RegistrationSuccess = ({ registrationId, event, date, venue, onClose }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg w-full max-w-md relative">
        <h2 className="text-lg md:text-xl font-bold text-center mb-4 text-blue-900">
          Registration Successful
        </h2>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <p className="text-center text-gray-700 mb-4">
          Thank you! Your registration is confirmed.
        </p>

        <div className="space-y-2 text-sm md:text-base text-gray-700">
          <p>
            <strong>Registration ID:</strong> {registrationId}
          </p>
          <p>
            <strong>Event:</strong> {event}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Venue:</strong> {venue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
