import { createSlice } from "@reduxjs/toolkit";

    const UserSlice = createSlice({
        name: "user",
        initialState: {
            createUser: {
                isFetching: false
            },
            user: {
                user: [],
            }
        },
        reducers: {
            createUserStart: (state) => {
                state.createUser.isFetching = true;
            },
            createUserSuccess: (state) => {
                state.createUser.isFetching = false;
            },
            getUserByIdSuccess: (state, action) => {
            state.user = action.payload;
            }       
        }
    })

export const { createUserStart, createUserSuccess,getUserByIdSuccess } = UserSlice.actions;
export default UserSlice.reducer;