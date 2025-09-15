import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean;
    user: null;
    loading: boolean;
    error: null;
}

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,

}

// export const checkAuth = createAsyncThunk({


// })

export const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
            // state.user = action.payload;
            state.error = null;

        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.user=null;
        },

    },
    // extraReducers:(builder)=>{
    // builder
    //     .addCase(checkAuth.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(checkAuth.fulfilled, (state, action: PayloadAction<any>) => {
    //     state.isLoggedIn = action.payload.isLoggedIn;
    //     state.user = action.payload.user ?? null;
    //     state.loading = false;
    //   })
    //   .addCase(checkAuth.rejected, (state, action) => {
    //     state.isLoggedIn = false;
    //     state.user = null;
    //     state.loading = false;
    //     state.error = action.payload as string;
    //   });
    // }


})
export const { loginSuccess, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
