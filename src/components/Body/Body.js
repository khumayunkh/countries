import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesThunk } from "../../store/CountriesReducer";


function Body(){
    const {countries} = useSelector(state => state.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountriesThunk())
    },[])

    return(
        <>
        
        </>
    )
}

export default Body