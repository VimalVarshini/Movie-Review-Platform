import { useEffect, useState } from "react";
import api from "../services/axios";
import { deleteMovie, fetchUsers, deleteUser } from "../services/adminService";
import { useSelector } from "react-redux";

export default function Admin() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [director, setDirector] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const { role } = useSelector((state) => state.auth);

  if (role !== "admin") {
    return <p className="text-center mt-10 text-red-500">Access Denied 🚫</p>;
  }

  // Load movies & users
  useEffect(() => {
    api.get("/movies").then((res) => setMovies(res.data));
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleAddMovie = async (e) => {
    e.preventDefault();
    try {
      await api.post("/movies", { title, genre, releaseYear, director, posterUrl, synopsis });
      alert("Movie added 🎉");
      const res = await api.get("/movies");
      setMovies(res.data);
    } catch {
      alert("Failed to add movie ❌");
    }
  };

  const handleDeleteMovie = async (id) => {
    if (!window.confirm("Delete this movie?")) return;
    await deleteMovie(id);
    setMovies(movies.filter((m) => m._id !== id));
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await deleteUser(id);
    setUsers(users.filter((u) => u._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 Admin Panel</h1>

      {/* Add Movie Form */}
      <form onSubmit={handleAddMovie} className="space-y-4 max-w-lg mb-10">
        <h2 className="text-xl font-semibold">Add Movie</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <input type="text" placeholder="Poster URL" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} className="w-full border px-3 py-2 rounded" />
        <textarea placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} className="w-full border px-3 py-2 rounded"></textarea>
        <button type="submit" className="bg-yellow-400 px-4 py-2 rounded font-bold hover:bg-yellow-300">Add Movie</button>
      </form>

      {/* Movies List */}
      <h2 className="text-xl font-semibold mb-4">Manage Movies</h2>
      <ul className="space-y-2 mb-10">
        {movies.map((m) => (
          <li key={m._id} className="flex justify-between bg-gray-100 p-3 rounded">
            <span>{m.title} ({m.releaseYear})</span>
            <button onClick={() => handleDeleteMovie(m._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>

      {/* Users List */}
      <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
      <ul className="space-y-2">
        {users.map((u) => (
          <li key={u._id} className="flex justify-between bg-gray-100 p-3 rounded">
            <span>{u.username} ({u.email})</span>
            <button onClick={() => handleDeleteUser(u._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
