import { createSelector } from "@reduxjs/toolkit";

export const selectOrder = (state) => state.order;

export const selectAllOrder = createSelector(
    [selectOrder], (orderSlice) => orderSlice?.orderList
)