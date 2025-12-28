import { useParams, Link } from "react-router-dom";
import { getArticles } from "../services/articleService";
import "../styles/articleDetail.css";

export default function ArticleDetail() {
  const { id } = useParams();
  const articles = getArticles();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="article-detail">
        <h2>Artikel tidak ditemukan</h2>
        <p>Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>

        <Link to="/articles" className="back-link">
          ← Kembali ke daftar artikel
        </Link>
      </div>
    );
  }

  return (
    <div className="article-detail">
      {/* Judul */}
      <h1>{article.title}</h1>

      {/* Meta */}
      <div className="article-meta">
        <span className="badge">{article.category}</span>
        
      </div>

      <div className="article-content">
  {article.content
    .split("\n")
    .filter(p => p.trim() !== "")
    .map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
</div>


      {/* Highlight edukasi */}
      <div className="article-highlight">
        <strong>Catatan Penting:</strong>
        <p>
          Informasi pada artikel ini bersifat edukatif dan tidak menggantikan
          konsultasi langsung dengan tenaga kesehatan profesional.
        </p>
      </div>

      {/* Back */}
      <Link to="/articles" className="back-link">
        ← Kembali ke daftar artikel
      </Link>
    </div>
  );
}
