import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/articleService";
import "../styles/home.css";
import doctorImg from "../assets/doctor.png";
import { teamMembers } from "../data/team";
import { initScrollReveal } from "../utils/scrollReveal";
import BloodPressureCalculator from "../components/BloodPressureCalculator";


export default function Home() {
  const articles = getArticles().slice(0, 3);

  // 🔥 WAJIB: init scroll reveal SETELAH component render
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-container">
          {/* KIRI */}
          <div className="hero-text">
            <h1>
              Edukasi <br />
              Hipertensi
            </h1>

            <p>
              Website edukasi kesehatan untuk membantu masyarakat memahami,
              mencegah, dan mengelola tekanan darah tinggi secara lebih baik.
            </p>

            <div className="hero-actions">
              <Link to="/articles" className="btn-primary">
                Baca Artikel
              </Link>
              <a href="#edukasi" className="btn-secondary">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* KANAN */}
          <div className="hero-image">
            <img src={doctorImg} alt="Edukasi Kesehatan Hipertensi" />
          </div>
        </div>
      </section>

{/* BANNER EDUKASI HIPERTENSI */}
<section className="hypertension-banner">
  <div className="banner-overlay">
    <div className="banner-content">
      <h2>Menjaga Tekanan Darah, Menjaga Kualitas Hidup</h2>

      <p>
        Hipertensi bukan hanya tentang angka pada alat tensi, tetapi tentang
        bagaimana kita menjaga jantung, pembuluh darah, dan kualitas hidup
        sehari-hari. Edukasi yang tepat membantu mencegah komplikasi serius di
        masa depan.
      </p>

      <Link to="/articles" className="btn-banner">
        Pelajari Selengkapnya
      </Link>
    </div>
  </div>
</section>


      {/* EDUKASI */}
      <section id="edukasi" className="info-section reveal">
        <h2>Apa itu Hipertensi?</h2>
        <p>
          Hipertensi adalah kondisi tekanan darah tinggi yang dapat meningkatkan
          risiko penyakit jantung, stroke, dan gangguan ginjal. Edukasi dan
          pencegahan sangat penting untuk mengendalikan kondisi ini.
        </p>

        <div className="info-grid">
          <div className="info-card reveal">
            <h3>💓 Berbahaya Diam-diam</h3>
            <p>
              Hipertensi sering tidak menimbulkan gejala, namun dapat menyebabkan
              komplikasi serius jika tidak dikendalikan.
            </p>
          </div>

          <div className="info-card reveal">
            <h3>📊 Perlu Kontrol Rutin</h3>
            <p>
              Pemeriksaan tekanan darah secara rutin membantu mendeteksi
              hipertensi sejak dini.
            </p>
          </div>

          <div className="info-card reveal">
            <h3>🥗 Bisa Dicegah</h3>
            <p>
              Pola hidup sehat seperti olahraga, pola makan seimbang, dan
              manajemen stres dapat menurunkan risiko hipertensi.
            </p>
          </div>
        </div>
      </section>

<BloodPressureCalculator />


      {/* TIM KAMI */}
      <section className="team-preview reveal">
        <h2>Tim Kami</h2>

        <p className="scroll-hint">
          Geser untuk melihat anggota lainnya →
        </p>

        <div className="team-scroll">
          {teamMembers.slice(0, 5).map((member) => (
            <div key={member.id} className="team-card reveal">
              <div className="team-avatar">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  member.name.charAt(0)
                )}
              </div>

              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </div>

        <Link to="/team" className="see-all">
          Lihat semua tim →
        </Link>
      </section>

      {/* ARTIKEL TERBARU */}
      <section className="latest-articles reveal">
        <h2>Artikel Terbaru</h2>

        {articles.map((article) => (
          <div key={article.id} className="article-preview reveal">
            <h3>{article.title}</h3>
            <p>{article.content.slice(0, 120)}...</p>
            <Link to={`/articles/${article.id}`} className="read-more">
              Baca selengkapnya →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
