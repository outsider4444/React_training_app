import React from "react";
import style from './Friends.module.css'

const Friends = (props) =>{
    return(
        <div className={style.main}>
            <div>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}
export default Friends;