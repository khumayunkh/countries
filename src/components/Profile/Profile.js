import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryThunk } from "../../store/CountriesReducer";
import style from './Profile.module.css'


function Profile(){
    const {profile} = useParams()
    const dispatch = useDispatch()
    const {country} = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(getCountryThunk(profile))
    },[])

    return(
        <>
        {country.map(item => <div>
            <h2>{item.name.official}</h2>
        </div>)}
        </>
    )
}

export default Profile