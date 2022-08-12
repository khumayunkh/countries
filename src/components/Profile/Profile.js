import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import style from './Profile.module.css'


function Profile(){
    const {profile} = useParams()
    const dispatch = useDispatch()

    
    return(
        <>
        <h2>{profile}</h2>
        </>
    )
}

export default Profile