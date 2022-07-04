import { createSelector } from "@reduxjs/toolkit";

export const selectAdmin = (state) => state.admin;

export const selectAllUser = createSelector(
    [selectAdmin], (adminSlice) => adminSlice?.userList?.data?.result
)

export const selectUserDetail = createSelector(
    [selectAdmin], (adminSlice) => adminSlice?.userDetail?.data
)


