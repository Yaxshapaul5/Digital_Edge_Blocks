import React from "react";
import "./ContactUs.css"; // Import styles for the Contact Us component
import addressIcon from "./../assets/address-icon.png"; // Path to Address icon
import phoneIcon from "./../assets/phone-icon.jpeg"; // Path to Phone icon
import mailIcon from "./../assets/mail-icon.png"; // Path to Mail icon

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-cards">
        {/* Address Card */}
        <div className="contact-card">
          <img src={addressIcon} alt="Address Icon" className="contact-icon" />
          <h3>Address</h3>
          <p>123 Main Street, <br /> Your City, Country, 45678</p>
        </div>

        {/* Call Us Card */}
        <div className="contact-card">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <h3>Call Us</h3>
          <p>+1 234 567 890</p>
          <p>+1 987 654 321</p>
        </div>

        {/* Mail Us Card */}
        <div className="contact-card">
          <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
          <h3>Mail Us</h3>
          <p>info@yourcompany.com</p>
          <p>support@yourcompany.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
