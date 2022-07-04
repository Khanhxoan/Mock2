import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
    isFetching: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.auth = action.payload;
    },
    logoutStart: (state) => {
      state.isFetching = true
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.auth = null;
    },
    refreshStart: (state) => {
      state.isFetching = true;
    },
    refreshSuccess: (state, action) => {
      state.isFetching = false;
      state.auth.data.tokens = action.payload;
    },
  },
});

export const { loginSuccess, loginStart, logoutSuccess, logoutStart, refreshStart, refreshSuccess } = authSlice.actions;
export default authSlice.reducer;
