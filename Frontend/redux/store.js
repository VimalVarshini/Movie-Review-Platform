import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import movieReducer from "./movieSlice";
import watchlistReducer from "./watchlistSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    movies: movieReducer,
    watchlist: watchlistReducer,
  },
});
