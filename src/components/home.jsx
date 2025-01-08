import React, { useState } from "react";
import "./style.css";
import homeImage from "./../assets/home.jpeg";
import About from "./about";
import Gallery from "./Gallery";
import Bricks from "./Bricks";
import ContactUs from "./contact";

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="container smooth-scroll">
        <nav className={`navbar ${menuActive ? "active" : ""}`}>
          <div className="logo"><span className="logoText">UR</span>_Blocks</div>
          <ul className="navLinks">
            <li className="navItem">
              <a href="#home" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#about" className="navLink">About Us</a>
            </li>
            <li className="navItem">
              <a href="#gallery" className="navLink">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#bricks" className="navLink">Bricks</a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">Contact Us</a>
            </li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
        </nav>

        <main className="mainContent">
          <div id="home" className="content-wrapper">
            <div className="text-section">
              <h1>Crafting Quality, One Block at a Time</h1>
              <p>Your Trusted Partner in Paving the Future !!</p>
              <span>
                With a focus on customer satisfaction and eco-friendly practices, we're here to help you bring your ideas to life.
                <p>Explore our range and let's build something amazing together!</p>
              </span>
            </div>
            <div className="image-section">
              <img src={homeImage} alt="Home" className="home-image" />
            </div>
          </div>
        </main>
      </div>

      <div id="about" className="about-section">
        <About />
      </div>

      <div id="gallery" className="gallery-section">
        <Gallery />
      </div>

      <div id="bricks" className="bricks-section">
        <Bricks />
      </div>

      <div id="contact" className="contact-section">
        <ContactUs />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>
            Designed with ❤️ by <strong>Digital_Edge</strong>
          </p>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
          <p>© 2025 UR_Blocks. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
