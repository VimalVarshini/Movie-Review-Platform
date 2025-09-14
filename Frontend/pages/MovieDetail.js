import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, postReview } from "../redux/movieSlice";
import { addMovieToWatchlist, removeMovieFromWatchlist } from "../redux/watchlistSlice";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.movies);
  const { token } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.watchlist);

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) return alert("Please login to add a review");
    dispatch(postReview({ id, review: { text: reviewText, rating } }));
    setReviewText("");
  };

  const inWatchlist = items.some((w) => w.movieId._id === current?._id);

  const handleWatchlist = () => {
    if (!token) return alert("Please login first");
    if (inWatchlist) {
      dispatch(removeMovieFromWatchlist(current._id));
    } else {
      dispatch(addMovieToWatchlist(current._id));
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {current && (
        <>
          <h1 className="text-3xl font-bold mb-4">{current.title}</h1>
          <img src={current.posterUrl} alt={current.title} className="w-60 mb-4 rounded" />
          <p className="mb-6 text-gray-700">{current.synopsis}</p>

          <button
            onClick={handleWatchlist}
            className={`px-4 py-2 rounded font-bold mb-6 ${
              inWatchlist ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
            }`}
          >
            {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>

          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <div className="space-y-3 mb-6">
            {current.reviews?.map((r, i) => (
              <div key={i} className="bg-gray-100 p-3 rounded">
                <p className="font-bold">⭐ {r.rating} - {r.user?.username || "Anonymous"}</p>
                <p>{r.text}</p>
              </div>
            ))}
          </div>

          {token && (
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review..."
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded font-bold"
              >
                Submit Review
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
