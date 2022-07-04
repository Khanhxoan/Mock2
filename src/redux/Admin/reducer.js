import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    userList: [],
    userDetail: [],
    isFetching: false,
  },
  reducers: {
    getUserStart: (state) => {
      state.isFetching = true
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false
      state.userList = action.payload;
    },
    getUserDetailStart: (state) => {
        state.isFetching = true
    },
    getUserDetailSuccess: (state, action) => {
        state.isFetching = false
        state.userDetail = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserDetailStart, getUserDetailSuccess } = adminSlice.actions;
export default adminSlice.reducer;
