import "antd/dist/antd.css";
import axios from "../axios";
import { Modal } from "antd";
import { loginSuccess, logoutSuccess } from "./reducer";

export const login = async (values, dispatch, nav) => {
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: values.email,
      password: values.password,
      deviceId: values.deviceId,
    });
    dispatch(loginSuccess(data));
    nav("/");
    Modal.success({
      title: "Login success",
    });
  } catch (error) {
    Modal.error({
      title: "Login failed",
      content: error.response.data.message,
    });
  }
};

export const register = async (values, nav) => {
  try {
    await axios.post("/v1/auth/register", {
      username: values.username,
      email: values.email,
      password: values.password,
    });
    nav("/login");
    Modal.success({
      title: "Register successed",
    });
  } catch (error) {
    Modal.error({
      title: "Register failed",
      content: error.response.data.message,
    });
  }
};

export const sendCode = async (email) => {
  try {
    await axios.post("/v1/auth/forgot-password", {
      email: email,
    });
    Modal.success({
      title: "Send Code successed",
    });
  } catch (error) {
    Modal.error({
      title: "Send Code failed",
      content: error.response.data.message,
    });
  }
};

export const logout = (refreshToken) => async (dispatch) => {
  try {
    await axios.post("/v1/auth/logout", {
      refreshToken,
    });
    dispatch(logoutSuccess());
  } catch (error) {
    Modal.error({
      title: "Logout failed",
    });
  }
};
