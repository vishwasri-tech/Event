import React, { useState } from "react";
import "./Contact.css";
import phone from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import emailIcon from "../assets/mail.png";
import location from "../assets/MapPin.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ WhatsApp Integration
  const phoneNumber = "917330669716"; // WhatsApp number with country code
  const presetMessage = "Hi, I would like to enquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    presetMessage
  )}`;

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Mobile validation (10 digits, starts 6-9)
    if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    // Email validation
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim().toLowerCase())
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Form submitted successfully!");

      // Reset form
      setFormData({ name: "", mobile: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      alert("Error submitting forms. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="contact-section">
      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Want to know more about the event? Contact us and let’s stay
          connected.
        </p>

        <div className="info-list">
          <div className="info-item">
            <img src={phone} alt="Phone" className="icon-img" />
            <span className="info-text">99082 08857, 93478 50568</span>
          </div>

          <div className="info-item">
            <img src={whatsapp} alt="WhatsApp" className="icon-img" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="info-text"
            >
              Chat On WhatsApp
            </a>
          </div>

          <div className="info-item">
            <img src={emailIcon} alt="Email" className="icon-img" />
            <span className="info-text">
              vishwasritechnologies@vishcom.info
            </span>
          </div>
          <div className="info-item">
            <img src={location} alt="Location" className="icon-img" />
            <span className="info-text">
              Arya One Building, Sindhi Colony, Begumpet, Hyderabad, Telangana
              500003
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
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
