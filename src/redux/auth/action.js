import "antd/dist/antd.css";
import axios from "../axios";
import { message, Modal } from "antd";
import { loginStart, loginSuccess, logoutStart, logoutSuccess } from "./reducer";
import { Navigate } from "react-router-dom";

export const login = async (values, dispatch) => {
  dispatch(loginStart())
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: values.email,
      password: values.password,
      deviceId: values.deviceId,
    });
    dispatch(loginSuccess(data));
    message.success("Login successed")

  } catch (error) {
    message.error({
      title: "Login failed",
      content: error.response.data.message,
    });
  }
};

export const register = async (values) => {
  try {
    await axios.post("/v1/auth/register", {
      username: values.username,
      email: values.email,
      password: values.password,
    });
    message.success({
      title: "Register successed",
    });
  } catch (error) {
    message.error({
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
    message.success({
      title: "Send Code successed",
    });
  } catch (error) {
    message.error({
      title: "Send Code failed",
      content: error.response.data.message,
    });
  }
};

export const logout = async (dispatch, refreshToken) => {
  dispatch(logoutStart())
  try {
    await axios.post("/v1/auth/logout", {
      refreshToken,
    });
    dispatch(logoutSuccess());
    message.success("Logout successed")
  } catch (error) {
    message.error({
      title: "Logout failed",
    });
  }
};
