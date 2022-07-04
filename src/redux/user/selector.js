import { createSelector } from "@reduxjs/toolkit";

export const selectUser = state => state.user;

export const selectUserById = createSelector(
    [selectUser], (userSlice) => userSlice?.user?.user?.data
)