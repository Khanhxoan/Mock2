import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
    status: null,
    allOrder: [],
    order: [],
  },
  reducers: {
    createOrderSuccess: (state, action) => {
      state.status = "success";
      state.orderList.push(action.payload);
      toast.success(`New order was created successfully`, {
        position: "bottom-left",
      });
    },
    createOrderFailed: (state) => {
      state.status = "failed";
      toast.error(`Please check again your contact information and try again!`, {
        position: "bottom-left",
      });
    },
    viewOrderSuccess: (state) => {
      state.status = "success";
    },
    viewOrderFailed: (state) => {
      state.status = "failed";
    },
    getAllOrderSuccess: (state, action) => {
      state.status = "success";
      state.allOrder = action.payload;
    },
    getAllOrderFailed: (state) => {
      state.status = "failed";
    },
    getOrderByIdSuccess: (state, action) => {
      state.status = "success";
      state.order = action.payload;
    },
    getOrderByIdFailed: (state) => {
      state.status = "failed";
    },
    updateOrderSuccess: (state, action) => {
      state.order = action.payload;
      toast.success(`Order was updated successfully`, {
        position: "bottom-left",
      });
    },
    getOrderSuccess: (state, action) => {
      state.order = action.payload;
      state.status = "success";
    }
  },
});
export const {
  createOrderFailed,
  createOrderSuccess,
  viewOrderFailed,
  viewOrderSuccess,
  getAllOrderFailed,
  getAllOrderSuccess,
  getOrderByIdFailed,
  getOrderByIdSuccess, 
  updateOrderSuccess,
  getOrderSuccess
} = orderSlice.actions;
export default orderSlice.reducer;
