import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getContries } from "../api/api"


export const getCountriesThunk = createAsyncThunk(
    'countries/getCountriesThunk',
    async (_, {dispatch}) => {
        const response = await getContries()
        const data = await response.data
        return data
    }
)

export const initialeState = {
    countries : [],
    countryByName : [],
    isLoading : false
}

export const CountriesSlice = createSlice({
    name: 'countries',
    initialState : initialeState,
    reducers: {
        setCountries : (state, action) =>{
            state.countries = action.payload
        },
        searchCountry :(state,action) => {
            state.countries = state.countryByName.filter(item => item.name.official.toLowerCase().includes(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            getCountriesThunk.pending, (state) => {
                state.isLoading = true
            })
        builder.addCase(
            getCountriesThunk.fulfilled, (state,action) => {
                state.isLoading = false
                state.countries = action.payload
                state.countryByName = action.payload
            })
        builder.addCase(
            getCountriesThunk.rejected, (state, action) => {
            })
        }
})


export const countriesAction = CountriesSlice.actions
export const countriesReducer = CountriesSlice.reducer