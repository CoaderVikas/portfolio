import "../../css/About.css";
import {
  ShieldCheck,
  Code2,
  Database,
  BookOpen
} from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-content">

          <p className="about-text">
            I'm a passionate Backend Developer with experience in building
            scalable, secure, and high-performance applications using Java,
            Spring Boot, Microservices, Kafka, Redis, and modern cloud
            technologies.
            <br /><br />
             I enjoy designing efficient system architectures, solving complex
            backend challenges, and developing real-world solutions that can
            handle large-scale traffic while maintaining performance,
            reliability, and scalability.
          </p>

          <div className="about-highlights">

            <div className="highlight-item">
              <ShieldCheck size={20} />
              <p>Problem Solver</p>
            </div>

            <div className="highlight-item">
              <Code2 size={20} />
              <p>Clean Code</p>
            </div>

            <div className="highlight-item">
              <Database size={20} />
              <p>System Design</p>
            </div>

            <div className="highlight-item">
              <BookOpen size={20} />
              <p>Continuous Learner</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;