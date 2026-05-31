import "../../../css/Project.css";
import React from "react";

const projectData = [
  {
    title: "Rental App",
    description:
      "Rental Hub is a microservices-based rental management platform that helps property owners verify tenant history, track rent payments, and manage multiple properties efficiently. It improves trust between owners and tenants through verified profiles, payment records, and feedback-based rental history.",
    link: "https://rental-hyca.onrender.com/",
    tags: ["React", "JS", "Vite"],
    icon: "🏠",
  },
   {
    title: "Deployed Services",
    description:
      "Cloud-hosted microservice registered with Eureka Server Supports dynamic service discovery and load balancing Ensures scalable and reliable communication across microservices.",
    link: "https://eureca-server.onrender.com/",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
    icon: "🏠",
  },
  {
    title: "Currently working service",
    description:
      "Coming Soon: A high-performance backend system currently under development using Microservices architecture.",
    link: "#",
    tags: ["Java", "Kafka", "Redis"],
    icon: "⚙️",
  },
  {
    title: "UpComming Project",
    description:
      "Coming Soon: A high-performance backend system currently under development using Microservices architecture.",
    link: "#",
    tags: ["Java", "Kafka", "Redis"],
    icon: "⚙️",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="purple-line-left"></div>

        <p className="section-subtitle">
          Click on any card to see the live application in action.
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() =>
                project.link !== "#" &&
                window.open(project.link, "_blank")
              }
            >
              <div className="project-content">
                <div className="project-header">
                  <span className="project-icon">{project.icon}</span>
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== "#" ? (
                  <div className="view-link">Live Demo →</div>
                ) : (
                  <div className="view-link disabled">
                    Under Development
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
