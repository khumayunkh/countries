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
        <div className={style.countries}>
            <div className={style.container}>
                <div className={style.countries_in}>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                   <div className={style.country}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"/>
                        <h2>Flag_of_Uzbekistan</h2>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                        <h3>dwdaddcrrrrrrrr</h3>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}   

export default Body