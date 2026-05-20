import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* TITLE */}

      <p className="contact-subtitle">
        Contact Me
      </p>

      <h2 className="contact-title">
        Get In Touch
      </h2>

      <p className="contact-description">
        Feel free to contact me for
        projects, collaboration or
        opportunities.
      </p>

      {/* CONTAINER */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h3>
            Contact Information
          </h3>

          {/* EMAIL */}

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>

              <p>
                princethakur7778@gmail.com
              </p>
            </div>

          </div>

          {/* PHONE */}

          <div className="info-card">

            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>

              <p>
                +91 0000000000
              </p>
            </div>

          </div>

          {/* LOCATION */}

          <div className="info-card">

            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>

              <p>
                India
              </p>
            </div>

          </div>

          {/* SOCIALS */}

          <div className="social-section">

            <h4>
              Connect with me
            </h4>

            <div className="social-icons">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-box">

          <h3>
            Send Me a Message
          </h3>

          <form className="contact-form">

            {/* TOP INPUTS */}

            <div className="input-row">

              <div className="input-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                />

              </div>

              <div className="input-group">

                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>

            {/* SUBJECT */}

            <div className="input-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="How can I help you?"
              />

            </div>

            {/* MESSAGE */}

            <div className="input-group">

              <label>
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message here..."
              ></textarea>

            </div>

            {/* BUTTON */}

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;