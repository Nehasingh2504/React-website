// src/pages/Contact.jsx
import React from 'react';
// Assuming your custom styles from index.css are loaded globally or imported here
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="main-page-container position-relative overflow-hidden">
      {/* 3. Main Content Grid */}
      <div className="container-fluid py-5">
        <div className="row justify-content-center align-items-stretch min-vh-80">
          
          {/* LEFT COLUMN: Intro Text and Icons */}
          <div className="col-lg-5 d-flex flex-column justify-content-center text-center text-lg-start mb-5 mb-lg-0 pe-lg-5">
            <h2 className="contact-intro-text mb-4">
              Whether you have an idea, a question, or simply want
              to explore how V can work for you, just a
              message away.
              Let's catch up over coffee.
              Great stories always begin with a good conversation
            </h2>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="col-lg-5 d-flex flex-column">
            <div className="contact-form-card p-4 p-md-5 rounded-3">
              <h3 className="form-title text-center text-lg-start mb-3">Join the Story</h3>
              <p className="form-subtitle text-center text-lg-start mb-4">Ready to bring your vision to life? Let's talk.</p>

              <form>
                <div className="mb-3">
                  <label htmlFor="yourName" className="form-label visually-hidden">Your name</label>
                  <input type="text" className="form-control custom-form-control" id="yourName" placeholder="Your name*" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="yourEmail" className="form-label visually-hidden">Your email</label>
                  <input type="email" className="form-control custom-form-control" id="yourEmail" placeholder="Your email*" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="yourPhone" className="form-label visually-hidden">Phone</label>
                  <input type="tel" className="form-control custom-form-control" id="yourPhone" placeholder="Phone" />
                </div>
                <div className="mb-4">
                  <label htmlFor="yourMessage" className="form-label visually-hidden">Your message</label>
                  <textarea className="form-control custom-form-control" id="yourMessage" rows="5" placeholder="Your message*"></textarea>
                </div>
                <div className="text-center text-lg-start">
                  <button type="submit" className="btn custom-submit-btn px-5 py-2">Submit</button>
                </div>
              </form>
            {/* Contact Info (below the form) */}
            <div className="contact-info mt-5 text-center text-lg-start">
              <p className="mb-1">
                <a href="mailto:vernita@varnanfilms.co.in" className="contact-link">vernita@varnanfilms.co.in</a>
              </p>
              <p className="mb-0">
                <a href="tel:+919873684567" className="contact-link">+91 98736 84567</a>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 4. Bottom Highlight Bar (if it's consistent across pages) */}
      <div className="bottom-highlight"></div>
      
    </div>
  );
};

export default Contact;