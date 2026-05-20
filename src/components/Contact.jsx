import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* TITLE */}

      <p className="contact-subtitle">
        Contact Me
      </p>

      <h2 className="contact-title">
        Let’s Work Together
      </h2>

      <p className="contact-description">
        Feel free to contact me for
        collaboration, projects or
        opportunities.
      </p>

      {/* CONTAINER */}

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          {/* EMAIL */}

          <div className="contact-card">

            <FaEnvelope className="contact-icon" />

            <div>
              <h3>Email</h3>

              <p>
                princethakur7778@gmail.com
              </p>
            </div>

          </div>

          {/* GITHUB */}

          <div className="contact-card">

            <FaGithub className="contact-icon" />

            <div>
              <h3>GitHub</h3>

              <p>
                github.com/yourusername
              </p>
            </div>

          </div>

          {/* LINKEDIN */}

          <div className="contact-card">

            <FaLinkedin className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>

              <p>
                linkedin.com/in/yourprofile
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;