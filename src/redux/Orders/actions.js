import axios from "../axios";
import {
  createOrderFailed,
  createOrderSuccess,
  viewOrderFailed,
  viewOrderSuccess,
  getAllOrderFailed,
  getAllOrderSuccess,
  getOrderByIdSuccess,
  getOrderByIdFailed,
  updateOrderSuccess,
  getOrderSuccess,
} from "./reducer";
import { message } from "antd"


export const createNewOrder = async (
  accessToken,
  order,
  dispatch,
  navigate
) => {
  try {
    const res = await axios.post("/v1/orders", order, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(createOrderSuccess(res.data));
    navigate("/success");
  } catch (error) {
    dispatch(createOrderFailed());
  }
};

export const getOrder = async (accessToken, dispatch) => {
  try {
    const res = await axios.post("/v1/orders/my-orders", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(viewOrderSuccess(res.data));
  } catch (err) {
    dispatch(viewOrderFailed());
  }
};

export const getAllOrderAdmin = async (accessToken, dispatch, page, size) => {
  try {
    const res = await axios.get(`/v1/orders?page=${page}&size=${size}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getAllOrderSuccess(res.data));
  } catch (err) {
    dispatch(getAllOrderFailed());
  }
};

export const getOrderById = async (accessToken, id, dispatch) => {
  try {
    const res = await axios.get(`/v1/orders/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getOrderByIdSuccess(res.data));
  } catch (err) {
    dispatch(getOrderByIdFailed());
  }
};

export const updateOrderById = async (accessToken, id, updated, dispatch) => {
  try {
    const res = await axios.patch(`/v1/orders/${id}`, updated, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(updateOrderSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getMyOrder = async (accessToken, dispatch,page) => {
  try {
    const res = await axios.get(`/v1/orders/my-orders?page=${page}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    dispatch(getOrderSuccess(res.data))
  }
  catch(err) {
    console.log(err)
  }
}

export const getAllOrder = async (accessToken, dispatch) => {
  try {
    const { data } = await axios.get('/v1/orders/my-orders', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(data);
    dispatch(getAllOrderSuccess(data));
  } catch (error) {
    message.error({
      title: 'Get orders failed',
      content: error.response.data.message,
    });
  }
};
