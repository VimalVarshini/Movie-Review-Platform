import api from "./axios";

export const fetchMovies = async () => {
  const res = await api.get("/movies");
  return res.data;
};

export const fetchMovieById = async (id) => {
  const res = await api.get(`/movies/${id}`);
  return res.data;
};

export const addReview = async (id, review) => {
  const res = await api.post(`/reviews/${id}`, review);
  return res.data;
};
