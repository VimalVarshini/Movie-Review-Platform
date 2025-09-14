import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWatchlist, addToWatchlist, removeFromWatchlist } from "../services/watchlistService";

export const getWatchlist = createAsyncThunk("watchlist/get", async (userId) => {
  return await fetchWatchlist(userId);
});

export const addMovieToWatchlist = createAsyncThunk("watchlist/add", async (movieId) => {
  return await addToWatchlist(movieId);
});

export const removeMovieFromWatchlist = createAsyncThunk("watchlist/remove", async (movieId) => {
  await removeFromWatchlist(movieId);
  return movieId; // return movieId to update state
});

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWatchlist.pending, (state) => { state.loading = true; })
      .addCase(getWatchlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addMovieToWatchlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeMovieFromWatchlist.fulfilled, (state, action) => {
        state.items = state.items.filter(w => w.movieId._id !== action.payload);
      });
  }
});

export default watchlistSlice.reducer;
