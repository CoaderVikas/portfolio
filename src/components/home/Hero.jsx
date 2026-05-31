import "../../css/Hero.css";
import laptopImage from "../../assets/image.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <h1 className="hero-title">Vikas Yadav</h1>

          <h2 className="hero-subtitle">Java FullStack Developer</h2>

          <p className="hero-description">
            Java | Spring Boot | Microservices | Kafka | Redis | ReactJS | SQL |
            AWS | Docker & Kubernetes | AI | Github Copilot
            <br />
            Building scalable and efficient backend systems.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                window.open("https://rental-hyca.onrender.com/", "_blank")
              }
            >
              Live Project
            </button>

            <button
              className="secondary-btn"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-links">
            <a
              href="https://github.com/CoaderVikas"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/mr-vikas-yadav/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="mailto:vikas.yadav83499@gmail.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>

            <a
              href="https://www.instagram.com/mr_viks_official/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="visual-box">
            <img
              src={laptopImage}
              alt="Developer Workspace"
              className="hero-laptop-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
