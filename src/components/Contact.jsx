import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  // SEND EMAIL FUNCTION

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_tuq2zev",
        "template_v9czl3n",
        form.current,
        "odGuwSuJp6j_JXmwk",
      )
      .then(
        () => {
          alert("Message sent successfully!");

          form.current.reset();

          setLoading(false);
        },
        (error) => {
          console.log(error.text);

          alert("Failed to send message.");

          setLoading(false);
        },
      );
  };

  return (
    <section className="contact" id="contact">
      {/* TITLE */}

      <p className="contact-subtitle">Contact Me</p>

      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-description">
        Feel free to contact me for projects, collaboration or opportunities.
      </p>

      {/* MAIN CONTAINER */}

      <div className="contact-container">
        {/* LEFT SIDE */}

        <div className="contact-info">
          <h3>Contact Information</h3>

          {/* EMAIL */}

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>

              <p>princethakur7778@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>

              <p>+91 7874000516</p>
            </div>
          </div>

          {/* LOCATION */}

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>

              <p>Valsad, Gujarat, India</p>
            </div>
          </div>

          {/* SOCIAL LINKS */}

          <div className="social-section">
            <h4>Connect with me</h4>

            <div className="social-icons">
              {/* GITHUB */}

              <a
                href="https://github.com/princethakur19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/prince-thakur-a99144264"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* X / TWITTER */}

              <a
                href="https://x.com/PinceThakur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/princethakur.19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-box">
          <h3>Send Me a Message</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            {/* NAME + EMAIL */}

            <div className="input-row">
              {/* NAME */}

              <div className="input-group">
                <label>Your Name</label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* EMAIL */}

              <div className="input-group">
                <label>Your Email</label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* SUBJECT */}

            <div className="input-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="How can I help you?"
                required
              />
            </div>

            {/* MESSAGE */}

            <div className="input-group">
              <label>Message</label>

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* BUTTON */}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
