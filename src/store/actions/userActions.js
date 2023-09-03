import { createAction } from "@reduxjs/toolkit";

export const userlog = createAction('userlog', (obj) => {
    return {
        payload: {
            log: obj.log
        }
    }
})