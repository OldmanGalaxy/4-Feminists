import React from 'react';
import './contactUs.css';
const Contact = () => {
  return (
    <div className="contact-us-container">
      <header className='contact-header'>
        <h1 className="contact-title">Contact Us</h1>
        <p className="subtitle">We're here to listen and assist you</p>
      </header>
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form className="message-form">
            <div className="input-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-group">
              <textarea id="message" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info-div">
          <div className="info-card">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <i className="fa fa-map-marker"></i>
              <p>ABVB Room 613, Piplod, Surat, Gujarat, India</p>
            </div>
            <div className="info-item">
              <i className="fa fa-phone"></i>
              <p>+919579389062</p>
            </div>
            <div className="info-item">
              <i className="fa fa-envelope"></i>
              <p>
              info@forestfocus.com</p>
            </div>
            <div className="info-item">
              <i className="fa fa-comments"></i>
              <p>24/7 Online Support Available</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed/v1/place?q=svnit&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
          width="100%" 
          height="300" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;