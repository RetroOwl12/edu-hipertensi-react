import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <NavLink to="/" className="navbar-brand">
          EduHipertensi
        </NavLink>

        <button
  className="hamburger"
  onClick={() => setOpen(!open)}
  aria-label="Toggle menu"
>
  {open ? "✕" : "☰"}
</button>


        {/* MENU */}
        <div className={`navbar-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Beranda
          </NavLink>
          <NavLink to="/articles" onClick={() => setOpen(false)}>
            Artikel
          </NavLink>
          <NavLink to="/team" onClick={() => setOpen(false)}>
            Tim Kami
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
