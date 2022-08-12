import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountriesThunk } from "../../store/CountriesReducer";
import style from './Body.module.css'
import Pagination from "./Pagination/Pagination";

function Body(){
    const {countries} = useSelector(state => state.countries)
    const dispatch = useDispatch() 
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, serCountriesPerPage] = useState(9)
    
    useEffect(() => {
        dispatch(getCountriesThunk())
    },[]) 

    const indexOfLastPost = currentPage * countriesPerPage;
    const indexOfFirstPost = indexOfLastPost - countriesPerPage;
    const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost)
    
    const paginate = pageNumber => setCurrentPage(pageNumber)
    
    return(
        <> 
         <div className={style.countries}>
            <div className={style.container}>
                <div className={style.countries_in}>
                   {currentPosts.map( item => <div className={style.country}>
                    <img src={item.flags.png}/>
                    <h2>{item.name.official}</h2>
                    <h3>Region : {item.region}</h3>
                    <h3>Status: {item.status}</h3>
                    <h3>Time Zone : {item.timezones}</h3>
                    <NavLink className={style.btn} to={'/profile/' + item.name.official}>see more</NavLink>
                   </div>)}
                   <Pagination
                   todosPerPage={countriesPerPage}
                   totalTodos={countries.length}
                   paginate={paginate}
                   />
                </div>
            </div>
        </div>
        </>
    )
}   

export default Body