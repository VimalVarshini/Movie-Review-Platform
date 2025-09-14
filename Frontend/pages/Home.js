import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const dummyMovies = [
  { id: 1, title: "Inception", posterUrl: "https://via.placeholder.com/300x400", avgRating: 4.8 },
  { id: 2, title: "The Dark Knight", posterUrl: "https://via.placeholder.com/300x400", avgRating: 4.9 },
  { id: 3, title: "Interstellar", posterUrl: "https://via.placeholder.com/300x400", avgRating: 4.7 },
];

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(dummyMovies);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">🎬 Featured Movies</h1>

      {/* Register Button */}
      <div className="text-center mb-8">
        <Link
          to="/register"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-2 rounded"
        >
          Create an Account
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
