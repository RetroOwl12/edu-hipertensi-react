import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>EduHipertensi</h3>
          <p>
            Website edukasi kesehatan untuk membantu masyarakat memahami,
            mencegah, dan mengelola hipertensi secara lebih baik.
          </p>
        </div>

        {/* NAV */}
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/articles">Artikel</Link></li>
            <li><Link to="/team">Tim Kami</Link></li>
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div className="footer-note">
          <h4>Catatan</h4>
          <p>
            Informasi pada website ini bersifat edukatif dan tidak menggantikan
            konsultasi langsung dengan tenaga kesehatan profesional.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EduHipertensi. All rights reserved.
      </div>
    </footer>
  );
}
