import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getContries } from "../api/api"


export const getCountriesThunk = createAsyncThunk(
    'countries/getCountriesThunk',
    async (_, {dispatch}) => {
        const response = await getContries()
        dispatch(countriesAction.setCountries(response.data))
    }
)


export const initialeState = {
    countties : []
}

export const CountriesSlice = createSlice({
    name: 'countries',
    initialState : initialeState,
    reducers: {
        setCountries : (state, action) =>{
            state.countties = action.payload
        }
    }
})



export const countriesAction = CountriesSlice.actions
export const countriesReducer = CountriesSlice.reducer