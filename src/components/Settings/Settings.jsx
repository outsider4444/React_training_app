import React from "react";
import style from './Settings.module.css'

const Settings = (props) => {
    return(
        <div className={style.content}>
            Мои настройки
            {props.check}
        </div>
    );
}

export default Settings;