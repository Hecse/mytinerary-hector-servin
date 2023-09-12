import { createReducer } from "@reduxjs/toolkit";
import { userlogin } from "../actions/userActions";

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
)

export default userReducer