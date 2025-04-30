import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer container-fluid py-4">
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-decoration-none"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-decoration-none"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-decoration-none"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-decoration-none"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
