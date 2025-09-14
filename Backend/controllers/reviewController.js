const Review = require("../models/Review");
const Movie = require("../models/Movie");

exports.addReview = async (req, res) => {
  const { rating, text } = req.body;
  const review = new Review({ userId: req.user.id, movieId: req.params.id, rating, text });
  await review.save();

  // update avg rating
  const reviews = await Review.find({ movieId: req.params.id });
  const avg = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
  await Movie.findByIdAndUpdate(req.params.id, { avgRating: avg });

  res.json(review);
};
