import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Experience from "../components/Experience";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects/Project";
import Skills from "../components/home/Skills";
import React, { useEffect } from "react";
import SystemArchitecture from "../components/home/SystemArchitecture";
import FeaturedProjects from "../components/home/FeaturedProjects";
import "../App.css";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <div className="arch-exp-section">
        <Experience />
        <SystemArchitecture />
      </div>
      
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;