import React from "react";
import "./AboutPage.css";
import aboutA from "./../assets/about.jpeg";
import aboutB from "./../assets/about_1.jpeg";


const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-images">
          <img src={aboutA} alt="About Us" className="about-image" />
          <img src={aboutB} alt="Our Journey" className="about-image" />
        </div>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At UR_Blocks, we are dedicated to revolutionizing construction with
            high-quality interlocking pavers and eco-friendly materials. With years
            of expertise, we take pride in offering innovative solutions tailored
            to your needs. Our team is passionate about transforming ordinary spaces
            into extraordinary ones, combining durability, aesthetics, and functionality.
          </p>
          <p>
          Our mission is to empower residential, commercial, and public projects with sustainable and versatile designs. From driveways and patios to large-scale urban developments, our products are tailored to meet diverse needs while maintaining a commitment to environmental responsibility and long-term value.
          </p>
          <p>
          We invite you to explore our journey, discover our values, and partner with us in building a future defined by innovation and sustainability. Together, let’s create spaces that inspire and endure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
