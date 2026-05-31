import "../../css/Skill.css";
import React from "react";

// React Icons ke alag-alag packages se icons import kiye hain
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiApachekafka, SiRedis, SiPostgresql, SiKubernetes } from 'react-icons/si';
import { VscSettingsGear } from 'react-icons/vsc'; 

const skills = [
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
  { name: "Microservices", icon: <VscSettingsGear color="#0052CC" /> },
  { name: "Kafka", icon: <SiApachekafka color="#231F20" /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "Docker", icon: <FaDocker color="#2496ED" /> },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
  { name: "ReactJS", icon: <FaReact color="#61DAFB" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        
        {/* Main Single Card */}
        <div className="single-skills-card">
          
          {/* Heading Aligned Left */}
          <div className="skills-card-header">
            <h2 className="section-title">TECHNOLOGIES I WORK WITH</h2>
            <div className="purple-line-left"></div>
          </div>
          
          {/* Skills Badges Forced in ONE Single Row */}
          <div className="skills-badges-container">
            {skills.map((skill, index) => (
              <div className="skill-badge" key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;