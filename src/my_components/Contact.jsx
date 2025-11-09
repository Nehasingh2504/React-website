import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ Email Validation Helper
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // --- Validation ---
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Form Submitted Successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus({ type: "error", message: errorData?.error || "Submission failed." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-page-container position-relative overflow-hidden">
      <div className="container-fluid py-5">
        <div className="row justify-content-center align-items-stretch min-vh-80">
          {/* LEFT COLUMN: Intro Text */}
          <div className="col-lg-5 d-flex flex-column justify-content-center text-center text-lg-start mb-5 mb-lg-0 pe-lg-5">
            <h2 className="contact-intro-text mb-4">
              Whether you have an idea, a question, or simply want to explore how
              V can work for you, just a message away. Let's catch up over coffee.
              Great stories always begin with a good conversation.
            </h2>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="col-lg-5 d-flex flex-column">
            <div className="contact-form-card p-4 p-md-5 rounded-3">
              <h3 className="form-title text-center text-lg-start mb-3">Join the Story</h3>
              <p className="form-subtitle text-center text-lg-start mb-4">
                Ready to bring your vision to life? Let's talk.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control custom-form-control"
                    id="name"
                    placeholder="Your name*"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-form-control"
                    id="email"
                    placeholder="Your email*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control custom-form-control"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control custom-form-control"
                    id="message"
                    rows="5"
                    placeholder="Your message*"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center text-lg-start">
                  <button
                    type="submit"
                    className="btn custom-submit-btn px-5 py-2"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>

                {/* ✅ Status Message */}
                {status.message && (
                  <div
                    className={`mt-3 text-center ${
                      status.type === "success" ? "text-success" : "text-danger"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>

              {/* Contact Info */}
              <div className="contact-info mt-5 text-center text-lg-start">
                <p className="mb-1">
                  <a
                    href="mailto:vernita@varnanfilms.co.in"
                    className="contact-link"
                  >
                    vernita@varnanfilms.co.in
                  </a>
                </p>
                <p className="mb-0">
                  <a href="tel:+919873684567" className="contact-link">
                    +91 98736 84567
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
