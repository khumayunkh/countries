import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesThunk } from "../../store/CountriesReducer";
import style from './Body.module.css'

function Body(){
    const {countries} = useSelector(state => state.countries)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountriesThunk())
    },[])
    
    return(
        <>
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.body_in}>
                    {countries.map(item => <img src={item.flags.svg}/>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Body