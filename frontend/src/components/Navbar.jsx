import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EduHipertensi</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>Beranda</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Artikel</NavLink>
        </li>
        <li>
          <NavLink to="/team">Tim Kami</NavLink>
        </li>
      </ul>
    </nav>
  );
}
