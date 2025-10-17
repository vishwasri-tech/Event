import React from "react";
import "./About.css";

const AboutEvent = () => {
  return (
    <section className="about-event">
      <h2>About Event</h2>
      <p>
        Vishwasri Technologies proudly presents a grand event bringing together{" "}
        <strong>startups, students, families, and food lovers.</strong>
      </p>
      <p>
        Our purpose is to celebrate innovation, creativity, and community by
        creating a platform for learning, sharing, and connecting.
      </p>
      <p>
        Join us for a day filled with competitions, stalls, cultural shows,
        workshops, food experiences, and memorable moments.
      </p>
      <p>
        <strong>Event Venue:</strong>{" "}
        <a
          href="https://maps.google.com/?q=University+Post+Graduate+College+Secunderabad"
          target="_blank"
          rel="noopener noreferrer"
        >
          University Post Graduate College – Secunderabad
        </a>
      </p>
    </section>
  );
};

export default AboutEvent;
