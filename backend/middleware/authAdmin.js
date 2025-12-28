module.exports = function authAdmin(req, res, next) {
  console.log("🔥 authAdmin middleware HIT");

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: token missing" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== "admin-token-123") {
    return res.status(403).json({ message: "Forbidden: invalid token" });
  }

  next();
};
