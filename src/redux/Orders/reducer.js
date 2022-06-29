import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderList: [],
        status: null
    },
    reducers: {
        createOrderSuccess: (state, action) => {
            state.status = "success";
            state.orderList.push(action.payload)
            toast.success(`New order was created successfully` , {
                position: "bottom-left"
              })
        },
        createOrderFailed: (state) => {
            state.status = "failed"
        },
        viewOrderSuccess: (state) => {
            state.status = "success";
        },
        viewOrderFailed: (state) => {
            state.status = "failed";
        }
    }
})
export const {createOrderFailed, createOrderSuccess, viewOrderFailed, viewOrderSuccess} = orderSlice.actions;
export default orderSlice.reducer;