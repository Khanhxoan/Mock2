import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0, //total number
    cartTotalAmount: 0, //total price
    status: null,
    newCart: [],
  },
  reducers: {
    createNewCartSuccess: (state, action) => {
      state.status = "success";
      state.cartItems.push(action.payload);
      
    },
    createNewCartFailed: (state) => {
      state.status = "rejected";
    },
    addToCartSuccess: (state, action) => {
      state.cartItems.push(action.payload);   
      state.status = "success";
      
    },
    addToCartFailed: (state) => {
      state.status = "rejected";
    },
    getCartByIDSuccess: (state, action) => {
      state.newCart = action.payload;
      state.status = "success";
    },
    getCartByIDFailed: (state) => {
      state.status = "rejected";
    },
    deleteItemSuccess: (state, action) => {
      const nextCartItems = state.newCart.data.items.filter(
        (newCartItem) => newCartItem.id !== action.payload.id
      );
      state.newCart = nextCartItems;
      toast.success(`item deleted from cart` , {
        position: "bottom-left"
      })
      console.log(action.payload)
      
      console.log(current(state.newCart))
      state.status = "success";
    },
    deleteItemFailed: (state) => {
      state.status = "rejected";
    },
    decreaseCart: (state, action) => {

      const itemIndex = state.newCart.data.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.newCart.data.items[itemIndex].quantity > 1) {
        state.newCart.data.items[itemIndex].quantity -= 1;
      } 
    },
    increaseCart: (state, action) => {
      const itemIndex = state.newCart.data.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.newCart.data.items[itemIndex].quantity >= 1) {
        state.newCart.data.items[itemIndex].quantity += 1;
      }
    },
   
    deleteCartSuccess: (state, action) => {
      state.cartItems = [];
      state.newCart = [];
      state.status = "success";
    },
    deleteCartFailed: (state) => {
      state.status = "rejected";
    },
  },
});
export const {
  addToCartSuccess,
  addToCartFailed,
  deleteCartSuccess,
  deleteCartFailed,
  createNewCartSuccess,
  createNewCartFailed,
  getCartByIDFailed,
  getCartByIDSuccess,
  deleteItemFailed,
  deleteItemSuccess,
  decreaseCart,
  increaseCart,

} = cartSlice.actions;
export default cartSlice.reducer;
