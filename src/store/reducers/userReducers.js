import { createReducer } from "@reduxjs/toolkit";
import { userlog } from "../actions/userActions";

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
)

export default userReducer