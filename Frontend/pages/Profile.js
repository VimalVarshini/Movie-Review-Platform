import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "../redux/watchlistSlice";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(getWatchlist(id));
  }, [dispatch, id]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">👤 User Profile</h1>
      <h2 className="text-2xl mb-4">🎬 My Watchlist</h2>
      {loading ? (
        <p>Loading watchlist...</p>
      ) : items.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((wl) => (
            <MovieCard key={wl._id} movie={wl.movieId} />
          ))}
        </div>
      )}
    </div>
  );
}
