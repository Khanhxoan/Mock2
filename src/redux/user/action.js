import { message } from "antd";
import axios from "../axios";
import { createUserStart, createUserSuccess } from "./reducer"
import { getUserByIdSuccess } from "./reducer";

export const createUser = async (dispatch, newUser, accessToken) => {
    dispatch(createUserStart());
    try {
        await axios.post('/v1/users', newUser, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          dispatch(createUserSuccess())
          message.success("Create a new user success!")
    } catch (err) {
        message.error({
            content: err.response.data.message
          })
    }
}


export const getUserById = async(accessToken, id, dispatch) => {
    try {
        const res = await axios.get(`/v1/users/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        dispatch(getUserByIdSuccess(res.data))
    }
    catch(err){
        console.log(err)
    }
}