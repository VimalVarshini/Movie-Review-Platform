import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  // if not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
