import { createReducer } from "@reduxjs/toolkit";
import { filterCities, getCities, getCity } from "../actions/cityActions";

const initialState = {
    cities: [],
    city:[]
}

const cityReducer = createReducer(initialState,
    (builder) => builder
        .addCase(getCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }

        })
        .addCase(filterCities.fulfilled, (state, action) => {
            return {
                ...state,
                cities: action.payload.cities
            }
        })
        .addCase(getCity.fulfilled, (state, action) => {
            return {
                ...state,
                city: action.payload.city                
            }
        })
)

export default cityReducer;