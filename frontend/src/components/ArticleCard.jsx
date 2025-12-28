import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <small>{article.category}</small>
      <p>{article.content.substring(0, 100)}...</p>

      <Link to={`/articles/${article.id}`}>
        Baca selengkapnya →
      </Link>
    </div>
  );
}
