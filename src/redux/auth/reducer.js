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
    loginFailed: (state) => {
      state.isFetching = false
    },
    logoutStart: (state) => {
      state.isFetching = true
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.auth = null;
    },
    logoutFailed: (state) => {
      state.isFetching = false
    },

    refreshStart: (state) => {
      state.isFetching = true;
    },
    refreshSuccess: (state, action) => {
      state.isFetching = false;
      state.auth.data.tokens = action.payload;
    },
    getMyProfileSuccess: (state, action) => {
      state.auth.data.user = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state) => {
      state.isFetching = false
    },
    registerFailed: (state) => {
      state.isFetching = false
    }
  },
});

export const {registerFailed, loginFailed, logoutFailed, registerStart, registerSuccess, loginSuccess, loginStart, logoutSuccess, logoutStart, refreshStart, refreshSuccess, getMyProfileSuccess } = authSlice.actions;
export default authSlice.reducer;
