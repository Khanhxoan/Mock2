import "antd/dist/antd.css";
import axios from "../axios";
import { message } from "antd";
import {
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  refreshStart,
  refreshSuccess,
} from "./reducer";
import { Navigate } from "react-router-dom";

export const login = async (values, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: values.email,
      password: values.password,
      deviceId: values.deviceId,
    });
    dispatch(loginSuccess(data));
    const role = data.data.user.role;
    console.log(role);
    if (role === "admin") {
      return <Navigate to="/admin" />;
    }
    if (role === "user") {
      return <Navigate to="/" />;
    }
    message.success("Login successed");
  } catch (error) {
    message.error({
      title: "Login failed",
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

export const logout = async (dispatch, refreshToken, deviceId) => {
  try {
    await axios.post("/v1/auth/logout", {
      refreshToken,
      deviceId,
    });
    dispatch(logoutSuccess());
    message.success("Logout successed");
  } catch (error) {
    message.error("Logout failed");
  }
};

export const refresh = async (refreshToken, dispatch) => {
  dispatch(refreshStart());
  try {
    const res = await axios.post("/v1/auth/refresh-tokens", { refreshToken });
    dispatch(refreshSuccess(res.data));
    return res;
  } catch (err) {
    message.error("refresh failed");
  }
};

export const changeContact = async (accessToken, contact) => {
  try {
    await axios.get("/v1/users/change-contact", {
      headers: { Authorization: `Bearer ${accessToken}` },
      contact,
    });
    message.success({
      title: "Change Contact successed",
    });
  } catch (error) {
    message.error({
      title: "Change Contact failed",
      content: error.response.data.message,
    });
  }
};

export const changeUsername = async (accessToken, username) => {
  try {
    const { data } = await axios.post("/v1/users/change-username", username, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    debugger;
    console.log(username);
    console.log(data);
    message.success({
      title: "Change Username successed",
    });
  } catch (error) {
    message.error({
      title: "Change Username failed",
      content: error.response,
    });
  }
};

export const changeEmail = async (accessToken, email, contact) => {
  try {
    await axios.get("/v1/users/change-email", {
      headers: { Authorization: `Bearer ${accessToken}` },
      contact,
    });
    message.success({
      title: "Change Email successed",
    });
  } catch (error) {
    message.error({
      title: "Change Email failed",
      content: error.response.data.message,
    });
  }
};

export const changePassword = async (accessToken, password) => {
  try {
    await axios.get("/v1/users/change-password", {
      headers: { Authorization: `Bearer ${accessToken}` },
      password,
    });
    message.success({
      title: "Change Password successed",
    });
  } catch (error) {
    message.error({
      title: "Change Password failed",
      content: error.response.data.message,
    });
  }
};

export const changeAvatar = async (accessToken, avatar) => {
  try {
    await axios.get("/v1/users/change-avatar", {
      headers: { Authorization: `Bearer ${accessToken}` },
      avatar,
    });
    message.error({
      title: "Change Avatar successed",
    });
  } catch (error) {
    message.error({
      title: "Change Avatar failed",
      content: error.response.data.message,
    });
  }
};
