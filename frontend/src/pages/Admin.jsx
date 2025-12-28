import { useState } from "react";
import {
  getArticles,
  createArticle,
  deleteArticle,
  updateArticle,
} from "../services/articleService";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

export default function Admin() {
  const [articles, setArticles] = useState(getArticles());

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Pengertian");

  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("Pengertian");
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      // UPDATE
      updateArticle(editingId, {
        title,
        content,
        category,
      });
    } else {
      // CREATE
      createArticle({
        title,
        content,
        category,
      });
    }

    setArticles(getArticles());
    resetForm();
  };

  const handleEdit = (article) => {
    setTitle(article.title);
    setContent(article.content);
    setCategory(article.category);
    setEditingId(article.id);
  };

  const handleDelete = (id) => {
    if (confirm("Hapus artikel ini?")) {
      deleteArticle(id);
      setArticles(getArticles());
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="admin-list-title">
            Kelola artikel edukasi hipertensi
          </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* FORM */}
      <div className="admin-form" style={{ flexDirection: "column" }}>
        <input
          value={title}
          placeholder="Judul artikel"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={content}
          placeholder="Isi artikel"
          rows={4}
          onChange={(e) => setContent(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Pengertian</option>
          <option>Penyebab</option>
          <option>Gejala</option>
          <option>Pencegahan</option>
          <option>Pengobatan</option>
        </select>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleSubmit}>
            {editingId ? "Update Artikel" : "Tambah Artikel"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              style={{ background: "#9ca3af" }}
            >
              Batal
            </button>
          )}
        </div>
      </div>

      {/* LIST */}
      {articles.length === 0 && <p>Belum ada artikel.</p>}

      <ul className="admin-list">
        {articles.map((a) => (
          <li key={a.id} className="admin-item">
            <div>
              <strong>{a.title}</strong>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                {a.category}
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                className="admin-edit-btn"
                onClick={() => handleEdit(a)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(a.id)}
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
