import "./Skills.css";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

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
    <div className="skills">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <span>🟨</span>
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <span>🟦</span>
            <p>TypeScript</p>
          </div>

          <div className="skill-card">
            <span>⚛️</span>
            <p>React</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <span>🟩</span>
            <p>Node.js</p>
          </div>

          <div className="skill-card">
            <span>🚂</span>
            <p>Express.js</p>
          </div>

          <div className="skill-card">
            <span>🍃</span>
            <p>MongoDB / Mongoose</p>
          </div>
        </div>
      </div>
    </div>
  );
}
