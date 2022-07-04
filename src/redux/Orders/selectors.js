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

// trỏ đến state của reducer order
export const selectAllOrder1 = (state) => state.order;

// trỏ đến item order của orderSlice
export const selectOrder1 = createSelector(
  [selectAllOrder1],
  (orderSlice) => orderSlice?.order,
);

//---------------user--------------------------------

export const selectOrders = createSelector(
    [selectOrder1],
    (order) => order?.data?.orders?.result,
  );
  
