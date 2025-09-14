import api from "./axios";

export const fetchWatchlist = async (userId) => {
  const res = await api.get(`/users/${userId}/watchlist`);
  return res.data;
};

export const addToWatchlist = async (movieId) => {
  const res = await api.post("/users/watchlist", { movieId });
  return res.data;
};

export const removeFromWatchlist = async (movieId) => {
  const res = await api.delete(`/users/watchlist/${movieId}`);
  return res.data;
};
