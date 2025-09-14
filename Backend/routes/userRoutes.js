const express = require("express");
const router = express.Router();
const { getProfile, getWatchlist, addToWatchlist, removeFromWatchlist, getAllUsers, deleteUser } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.get("/:id", getProfile);
router.get("/:id/watchlist", getWatchlist);
router.post("/watchlist", auth, addToWatchlist);
router.delete("/watchlist/:movieId", auth, removeFromWatchlist);

// Admin routes
router.get("/", auth, authorizeRole("admin"), getAllUsers);
router.delete("/:id", auth, authorizeRole("admin"), deleteUser);

module.exports = router;
