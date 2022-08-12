import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { countriesAction } from "../../store/CountriesReducer";
import style from './Header.module.css'


function Header(){
    const inputRef = useRef('')
    const dispatch = useDispatch()

    const filterByName = () => {
        dispatch(countriesAction.searchCountry(inputRef.current.value))
    }

    return(
        <>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <input ref={inputRef} onChange={filterByName} placeholder="Search..." className={style.input}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header