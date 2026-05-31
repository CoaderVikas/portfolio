import React from "react";
import "../css/Experience.css";

const experienceData = [
  {
    year: "2021",
    company: "Volante Technologies",
    role: "Software Engineer Intern",
    logo: "https://th.bing.com/th/id/OIP.DaUEIFRBJt9_wjycoU7G3QAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    year: "2021 - 2022",
    company: "ATCS",
    role: "Associate Engineer",
    logo: "https://varindia.com/storage/news/uploads/2016/laravel/5965f6a32783c.jpg"
  },
  {
    year: "2022 - 2023",
    company: "Nagarro",
    role: "Software Engineer",
    logo: "https://th.bing.com/th/id/OIP.iy_5qCdsc19YbonRFe9EWAAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    year: "2024 - Present",
    company: "Birlasoft",
    role: "Senior Software Engineer / Full Stack Developer",
    logo: "https://www.goodreturns.in/img/2020/08/birlasoft-1596691683.jpg"
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <h2 className="section-title experience-title">
          PROFESSIONAL JOURNEY
        </h2>

        <div className="purple-line-left"></div>

        <p className="section-subtitle">
          Career progression across leading software companies.
        </p>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>

              {/* COMPANY LOGO */}
              <div className="timeline-icon">
                <img src={exp.logo} alt={exp.company} />
              </div>

              {/* CONTENT */}
              <div className="timeline-content">

                <span className="timeline-date">
                  {exp.year}
                </span>

                <h3 className="company-role">
                  {exp.company} - {exp.role}
                </h3>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;