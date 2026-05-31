import "../../css/FeaturedProjects.css";
import React from "react";

import {
  FaChartLine,
  FaEnvelope,
  FaLock,
  FaBell
} from "react-icons/fa";

const projects = [
  {
    title: "TrackFull",
    desc: "Employee Tracking SaaS Platform",
    icon: <FaChartLine />,
    color: "#8B5CF6",
    tech: ["Java", "Spring Boot", "React", "Redis"]
  },
  {
    title: "Mailer Service",
    desc: "Kafka based Email Service",
    icon: <FaEnvelope />,
    color: "#22C55E",
    tech: ["Java", "Spring Boot", "Kafka", "SMTP"]
  },
  {
    title: "Auth Service",
    desc: "Authentication & Authorization",
    icon: <FaLock />,
    color: "#F59E0B",
    tech: ["Java", "Spring Security", "JWT", "MySQL"]
  },
  {
    title: "Notification Service",
    desc: "Real-time Notification System",
    icon: <FaBell />,
    color: "#38BDF8",
    tech: ["Java", "Kafka", "Redis", "WebSocket"]
  }
];

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects-container">

        <div className="featured-projects-card">

          <div className="featured-header">
            <div>
              <h2 className="featured-title">
                FEATURED PROJECTS
              </h2>
              <div className="purple-line"></div>
            </div>

            <button className="view-all-btn">
              View All Projects →
            </button>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>

                <div
                  className="project-icon"
                  style={{
                    color: project.color,
                    borderColor: project.color
                  }}
                >
                  {project.icon}
                </div>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <button>Live Demo</button>
                  <button>GitHub</button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;