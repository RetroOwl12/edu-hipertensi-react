const express = require("express");
const authAdmin = require("../middleware/authAdmin");

const router = express.Router();

// DEBUG WAJIB
router.use((req, res, next) => {
  console.log("🔥 ADMIN ROUTE HIT");
  next();
});

router.use(authAdmin);

router.post("/", (req, res) => {
  res.status(201).json({ message: "ADMIN POST OK" });
});

module.exports = router;
