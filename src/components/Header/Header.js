import React from "react";
import style from './Header.module.css'


function Header(){
    return(
        <>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <input placeholder="Search..." className={style.input}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header