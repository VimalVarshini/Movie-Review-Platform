import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieById, addReview } from "../services/movieService";

// Async actions
export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  return await fetchMovies();
});

export const getMovie = createAsyncThunk("movies/getMovie", async (id) => {
  return await fetchMovieById(id);
});

export const postReview = createAsyncThunk("movies/postReview", async ({ id, review }) => {
  return await addReview(id, review);
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    current: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        if (state.current) {
          state.current.reviews.push(action.payload);
        }
      });
  },
});

export default movieSlice.reducer;
