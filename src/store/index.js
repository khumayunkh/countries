import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./CountriesReducer";



export const store = configureStore({
    reducer:{
        countries : countriesReducer
    }
})