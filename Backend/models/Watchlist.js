const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
