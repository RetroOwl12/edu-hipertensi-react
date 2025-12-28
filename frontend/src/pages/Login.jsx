import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/admin");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login Admin</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
}
