import api from "./axios";

// Movies
export const deleteMovie = async (id) => {
  const res = await api.delete(`/movies/${id}`);
  return res.data;
};

// Users
export const fetchUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};
