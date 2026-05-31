import "../../css/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="purple-line-center"></div>
        
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, my inbox is always open!
        </p>

        <div className="contact-grid">
          {/* Email Card */}
          <a href="mailto:your-email@gmail.com" className="contact-card">
            <span className="contact-icon">📧</span>
            <h3>Email</h3>
            <p>your-email@gmail.com</p>
          </a>

          {/* LinkedIn Card */}
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">🔗</span>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-icon">💻</span>
            <h3>GitHub</h3>
            <p>View my code</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;