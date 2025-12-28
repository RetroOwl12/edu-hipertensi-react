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

router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));

  const newArticle = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  };

  data.push(newArticle);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  res.status(201).json(newArticle);
});

router.put("/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  data = data.map(a => a.id == req.params.id ? { ...a, ...req.body } : a);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Updated" });
});

router.delete("/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  data = data.filter(a => a.id != req.params.id);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.json({ message: "Deleted" });
});

module.exports = router;
