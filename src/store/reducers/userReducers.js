import { createReducer } from "@reduxjs/toolkit";
import { user_token, userlogin, userlogout } from "../actions/userActions";

const initialState = {
    user: null,
    token: null
}

const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(userlogin.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })

        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
            }
        })

        .addCase(userlogout.fulfilled, (state, action) => {
            return {
                ...state,
                user: null,
                token: null
            }
        }))

export default userReducer