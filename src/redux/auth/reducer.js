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
      debugger
    },
  },
});

export const { loginSuccess, loginStart, logoutSuccess, logoutStart } = authSlice.actions;
export default authSlice.reducer;
