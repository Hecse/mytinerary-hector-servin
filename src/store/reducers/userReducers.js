import { createReducer } from "@reduxjs/toolkit";
import { user_token, userlogin, userlogout } from "../actions/userActions";

const initialState = {
    log: 'Hola'
}

const userReducer = createReducer(initialState,
    (builde) => builde
        .addCase(userlog, (state, action) => {
            return {
                ...state,
                log: action.payload.log
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
                /* ...state,
                user: null,
                token: null */
            }
        }))

export default userReducer