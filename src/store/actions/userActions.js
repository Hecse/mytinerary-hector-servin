import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userlogin = createAsyncThunk('userlogin', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signin', obj.data)
        //console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        return {
            user: data.response.user,
            token: data.response.token
        }

    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})

/* export const userlogout = createAsyncThunk('userlogout', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signout', obj.data)
        //console.log(data);
        localStorage.setItem('token', JSON.stringify(data.response.token))
        localStorage.setItem('user', JSON.stringify(data.response.user))
        return {
            user: null,            
        }

    } catch (error) {
        console.log(error);
        return {
            user: data.response.user
        }
    }
}) */