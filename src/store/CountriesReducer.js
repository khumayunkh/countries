import { createSlice } from "@reduxjs/toolkit"


export const initialeState = {

}


export const CountriesSlice = createSlice({
    name: 'countries',
    initialState : initialeState,
    reducers: {

    }
})



export const countriesAction = CountriesSlice.actions
export const countriesReducer = CountriesSlice.reducer