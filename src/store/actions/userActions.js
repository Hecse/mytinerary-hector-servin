import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const userlogin = createAsyncThunk('userlogin', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signin', obj.data)
        //console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: data.response.user.name + ' ' + data.response.user.lastname,
            showConfirmButton: false,
            timer: 2500
        })
        return {
            user: data.response.user,
            token: data.response.token
        }

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return {
            user: null
        }
    }
})

export const usersingup = createAsyncThunk('usersingup', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signup', obj.data)
        //console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: data.response.user.name + ' ' + data.response.user.lastname,
            showConfirmButton: false,
            timer: 2500
        })
        return {
            user: data.response.user,
            token: data.response.token
        }

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        return {
            user: null
        }
    }
})

export const userlogingoogle = createAsyncThunk('userlogingoogle', async (userResponse) => {
    try {
        localStorage.setItem('token', userResponse.data.response.token)
        localStorage.setItem('user', JSON.stringify(userResponse.data.response.user))

        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: userResponse.data.response.user.name + ' ' + userResponse.data.response.user.lastname,
            showConfirmButton: false,
            timer: 2500
        })        
        return {
            user: userResponse.data.response.user,
            token: userResponse.data.response.token
        }

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })        
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

export const userlogout = createAction('userlogout', () => {
    try {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return {
            token: null,
            user: null
        }

    } catch (error) {
        console.log(error);
        return {
            user: data.response.user
        }
    }
})