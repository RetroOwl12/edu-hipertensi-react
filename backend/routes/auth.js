const express = require("express");
const router = express.Router();

const ADMIN = {
  username: "admin",
  password: "admin123"
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === ADMIN.username &&
    password === ADMIN.password
  ) {
    return res.json({
      token: "admin-token-123",
      message: "Login berhasil"
    });
  }

  res.status(401).json({
    message: "Username atau password salah"
  });
});

module.exports = router;
