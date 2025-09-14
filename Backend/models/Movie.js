const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
  director: String,
  cast: [String],
  synopsis: String,
  posterUrl: String,
  avgRating: { type: Number, default: 0 },
});

module.exports = mongoose.model("Movie", movieSchema);
