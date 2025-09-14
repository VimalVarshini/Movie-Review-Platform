function authorizeRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ msg: "Unauthorized" });
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ msg: "Forbidden: Access denied" });
    }
    next();
  };
}

module.exports = authorizeRole;
