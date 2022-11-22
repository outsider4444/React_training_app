import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://million-wallpapers.ru/wallpapers/4/95/18314026732454294752/podvesnoj-most-v-centre-goroda.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                Ава и описание
                <img src="https://www.sibirds.ru/photos/0515/004/05150160601.jpg" alt=""/>
            </div>
        </div>)
}
export default ProfileInfo;