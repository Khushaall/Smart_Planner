import { apiUser } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginURL, registerURL } from "@/lib/url";

interface AuthState {
  isLoggedIn: boolean;
  user: null | any;
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await apiUser("post", loginURL, data);
      if (response.error) {
        return thunkAPI.rejectWithValue(response.error as string);
      }
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(`Login failed: ${err.message ?? err}`);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data: { username: string; email: string; password: string }, thunkAPI) => {
    try {
      const response = await apiUser("post", registerURL, data);
      if (response.error) {
        return thunkAPI.rejectWithValue(response.error as string);
      }
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(`Register failed: ${err.message ?? err}`);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = true;
        state.user = action.payload.user ?? action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoggedIn = true;
        state.user = action.payload.user ?? action.payload;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
