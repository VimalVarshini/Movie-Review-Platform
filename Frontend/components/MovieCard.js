import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-yellow-500">⭐ {movie.avgRating}</p>
        <Link
          to={`/movies/${movie.id}`}
          className="mt-2 inline-block text-sm bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
