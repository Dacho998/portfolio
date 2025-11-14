import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <aside className={`navbar ${open ? "open" : ""}`}>
        <div className="logo">D</div>
        <nav className="nav-links" onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </aside>
    </>
  );
}
