const express = require("express");
const router = express.Router();
const { getMovies, getMovie, addMovie, deleteMovie } = require("../controllers/movieController");
const auth = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

router.get("/", getMovies);
router.get("/:id", getMovie);
router.post("/", auth, authorizeRole("admin"), addMovie);
router.delete("/:id", auth, authorizeRole("admin"), deleteMovie);

module.exports = router;
