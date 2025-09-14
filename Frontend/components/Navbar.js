import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const { user, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <h2 className="text-xl font-bold">🎬 MovieReview</h2>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/movies" className="hover:text-yellow-400">Movies</Link>
        {role === "admin" && (
          <Link to="/admin" className="text-yellow-400 font-bold">Admin Panel</Link>
        )}
        {user ? (
          <>
            <Link to={`/profile/${user._id}`} className="hover:text-yellow-400">Profile</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-400">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
              Login
            </Link>
            <Link to="/register" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
