const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const publicArticles = require("./routes/articles.public");
const adminArticles = require("./routes/articles.admin");

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 LOGIN
app.use("/api", authRoutes);

// 📖 PUBLIC (GET only)
app.use("/api/articles", publicArticles);

// 🔐 ADMIN (POST / PUT / DELETE)
app.use("/api/articles", adminArticles);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
