import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-part">
        <div className="footer-logo-container">
          <div className="footer-logo-img-container">
            <a href="/" className="footer-logo-link">
              <img src="/logo.png" className="footer-logo" alt="logo" />
            </a>
          </div>
          <div className="footer-title-container">
            <a href="" className="footer-title-link">
              <div className="footer-title-link-container">
                <p className="footer-forest">Forest</p> <p className="footer-focus">&nbsp;Focus</p>
              </div>
            </a>
          </div>
        </div> 
      </div>
      <div className="middle-part">
        <h3 className="quick-links-title">Quick Links</h3>
        <ul className="quick-links">
          <li><a href="/">Home</a></li>
          <li><a href="/awareness">Awareness</a></li>
          <li><a href="/wildlife">Wildlife</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="right-part">
        <h3 className="contact-us-title">Contact Us</h3>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>info@forestfocus.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>123 Green Street, Forest City, FC 12345</span>
          </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;