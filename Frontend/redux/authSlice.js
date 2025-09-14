import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/authService";

// Thunks
export const login = createAsyncThunk("auth/login", async (credentials) => {
  return await loginUser(credentials);
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  return await registerUser(userData);
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, role: "user", loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = "user";
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { state.loading = true; })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
        localStorage.setItem("auth", JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.error = "Login failed";
        state.loading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
        localStorage.setItem("auth", JSON.stringify(action.payload));
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.error = "Registration failed";
        state.loading = false;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
