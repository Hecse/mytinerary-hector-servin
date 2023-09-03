import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCities = createAsyncThunk(
    'getCities', async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/cities')

            //console.log(response.data.cities)

            return {
                cities: response.data.cities
            }
        } catch (error) {
            console.log(error)
        }
    }
)

export const filterCities = createAsyncThunk(
    'filterCities', async (obj) => {
        try {
            const response = await axios.get(`http://localhost:7000/api/cities?city=${obj.name}`)

            //console.log(response.data.cities)

            return {
                cities: response.data.cities
            }
        } catch (error) {
            
            return {
                cities: []
            }
        }
    }
)