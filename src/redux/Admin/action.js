import axios from "../axios";
import { getUserSuccess, getUserDetailSuccess} from "./reducer";
import { message } from "antd";

export const getUser = async (accessToken, dispatch, nav) => {
    try{
        const res = await axios.get("/v1/users", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        dispatch(getUserSuccess(res.data));
        nav('/admin/userlist')
    }
    catch(error){
        message.error({
            title: "Get Users failed",
            content: error.response.data.message,
          });
    }
}

export const getUserById = async (accessToken, dispatch, userId) => {
    try{
        const res = await axios.get(`/v1/users/${userId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        console.log(res.data.data);
        dispatch(getUserDetailSuccess(res.data));
        
    }
    catch(error){
        message.error({
            title: "Get User failed",
            content: error.response,
          });
    }
}

export const getUsersPageSize= async (accessToken ,dispatch, page, size) => {
    try {
      const res = await axios.get(`/v1/users?page=${page}&size=${size}`,{
        headers: { Authorization: `Bearer ${accessToken}` },
    });
      dispatch(getUserSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get all Users for page failed",
            content: err.response.data?.message,
          });
    }
}
