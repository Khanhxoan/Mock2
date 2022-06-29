import axios from "../../Api/axios";
import {
  addToCartFailed,
  addToCartSuccess,
  deleteCartFailed,
  deleteCartSuccess,
  createNewCartFailed,
  createNewCartSuccess,
  getCartByIDFailed,
  getCartByIDSuccess,
  deleteItemFailed,
  deleteItemSuccess
} from "./reducer";
import { toast } from "react-toastify";

export const createNewCart = async (accessToken, item, dispatch) => {
  try {
    const res = await axios.post("/v1/cart", item, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(createNewCartSuccess(res.data));
    toast.success("Created new cart", {
      position: "bottom-left"
    })
  } catch (err) {
    dispatch(createNewCartFailed());
  }
};
export const addNewItemToCart = async (accessToken, item, dispatch) => {
  try {
    const res = await axios.post("/v1/cart/create-item", item, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(addToCartSuccess(res.data));
    toast.success("Item added to cart", {
      position: "bottom-left"
    })
  } catch (err) {
    dispatch(addToCartFailed());
  }
};

export const getCartById = async (accessToken, cartID, dispatch) => {
  try {
    const res = await axios.get(`/v1/cart/${cartID}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getCartByIDSuccess(res.data))
  } catch (err) {
    dispatch(getCartByIDFailed())
  }
};

export const deleteItemById = async (accessToken, itemID, dispatch) => {
  try{
    const res = await axios.delete(`/v1/cart/manage-item/${itemID}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    dispatch(deleteItemSuccess(res.data))
  }
  catch(err){
    dispatch(deleteItemFailed())
  }
}

export const deleteCart = async (accessToken, id, dispatch) => {
  try {
    const res = await axios.delete(`/v1/cart/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(deleteCartSuccess(res.data));
  } catch (err) {
    dispatch(deleteCartFailed());
  }
};
