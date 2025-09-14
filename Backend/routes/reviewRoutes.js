const express = require("express");
const router = express.Router();
const { addReview } = require("../controllers/reviewController");
const auth = require("../middleware/authMiddleware");

router.post("/:id", auth, addReview);

module.exports = router;
