import { createSelector } from "@reduxjs/toolkit";

export const selectOrder = (state) => state.order;

export const selectAllOrder = createSelector(
    [selectOrder], (orderSlice) => orderSlice?.orderList
)

export const selectAllOrderAdmin = createSelector(
    [selectOrder], (orderSlice) => orderSlice?.allOrder?.data?.orders
)

export const selectOrderById= createSelector(
    [selectOrder], (orderSlice) => orderSlice?.order?.data
)
