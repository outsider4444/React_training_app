import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={style.dialogs + " " + style.active}>
            <img src="https://vraki.net/sites/default/files/inline/images/1_6.png" alt=""/> <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;