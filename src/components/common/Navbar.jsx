import { FaDownload } from "react-icons/fa";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        PRO<span>FILE</span>
      </div>

      <ul className="nav-links">
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#architecture">ARCHITECTURE</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#hero">CONTACT</a></li>
      </ul>

     <button className="resume-btn">
  <a
    href="/Vikas_Yadav_Resume.docx"
    download="Vikas_Yadav_Resume.docx"
  >
    <FaDownload className="download-icon" />
    Resume Download
  </a>
</button>
    </nav>
  );
}

export default Navbar;