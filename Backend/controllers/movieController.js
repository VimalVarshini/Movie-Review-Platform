const Movie = require("../models/Movie");

// Get all movies
exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// Get one movie
exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};

// Add movie (admin only)
exports.addMovie = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
};

// Delete movie (admin only)
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ msg: "Movie deleted" });
};
