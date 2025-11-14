import "./Project.css";
import HighTech from "../../assets/projects/HighTech.png";
import YourTime from "../../assets/projects/YourTime.png";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-grid">
      <h2>My Work</h2>

      <div className="project-card">
        <img src={HighTech} alt="High Tech" />
        <h3>High Tech</h3>
        <p>
          HighTech Service is a modern React application showcasing computer and
          laptop repair services. It features responsive UI and practical React
          development techniques.
        </p>
        <div className="links">
          <a href="https://high-tech-chi.vercel.app/" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href="https://github.com/Dacho998/HighTech" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="project-card">
        <img src={YourTime} alt="Your Time" />
        <h3>Your Time</h3>
        <p>
          Your Time is a web platform themed around watches, featuring a custom
          backend, user accounts and authentication with full CRUD capabilities.
        </p>
        <div className="links">
          <a href="https://your-time-theta.vercel.app/" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href="https://github.com/Dacho998/YourTime" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
