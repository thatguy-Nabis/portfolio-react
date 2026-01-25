const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>
            Have a question, opportunity, or just want to say hello? Feel free
            to reach out — I’m always open to connecting.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message here..." />
          </div>

          <button type="submit">Send Message</button>
        </form>

        {/* Social links */}
        <div className="contact-socials">
          <a
            href="https://github.com/thatguy-Nabis"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="devicon-github-original github-icon"></i>
          </a>

          <a
            href="https://linkedin.com/in/nabis-shrestha-268114288"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="devicon-linkedin-plain colored"></i>
          </a>

          <a
            href="https://instagram.com/thatguy_Nabis"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram instagram-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
