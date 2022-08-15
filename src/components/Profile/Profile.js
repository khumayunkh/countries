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
        <div className={style.country}>
            <div className={style.container}>
                {country.map(item => 
                <div key={item.name.official} className={style.country_in}>
                    <img src={item.flags.svg}/>
                    <h1>{item.name.official}</h1>
                    <h2>Capital : {item.capital}</h2>
                    <h2>Population : {item.population} people</h2>
                    
                </div>)}
            </div>
        </div>
        </>
    )
}

export default Profile