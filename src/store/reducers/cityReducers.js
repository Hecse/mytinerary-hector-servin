import { createReducer } from "@reduxjs/toolkit";
import { filterCities, getCities } from "../actions/cityActions";

const initialState = {
    cities: []
}

const cityReducer = createReducer(initialState,
    (builer) => builer
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
)

export default cityReducer;