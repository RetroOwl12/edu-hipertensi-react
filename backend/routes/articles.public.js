const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DATA_PATH = path.join(__dirname, "../data/articles.json");

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  res.json(data);
});

router.get("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  const article = data.find(a => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({ message: "Artikel tidak ditemukan" });
  }

  res.json(article);
});

module.exports = router;
