import { useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/articleService";
import "../styles/articles.css";

export default function Articles() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const articles = getArticles();
  const categories = ["all", ...new Set(articles.map(a => a.category))];

  const filteredArticles = articles.filter(article => {
    const matchQuery =
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase());

    const matchCategory =
      category === "all" || article.category === category;

    return matchQuery && matchCategory;
  });

  return (
    <div className="articles-page">
      <h1>Artikel Hipertensi</h1>

      {/* Controls */}
      <div className="article-controls">
        <input
          type="text"
          placeholder="Cari artikel..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* List */}
      {filteredArticles.length === 0 && (
        <p>Artikel tidak ditemukan.</p>
      )}

      <ul className="article-list">
        {filteredArticles.map(article => (
          <li key={article.id} className="article-card">
            <span className="badge">{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.content.substring(0, 120)}...</p>
            <Link to={`/articles/${article.id}`}>
              Baca selengkapnya →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
