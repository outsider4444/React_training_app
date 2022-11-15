import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div className={style.content}>
            <div>
                <img src="https://million-wallpapers.ru/wallpapers/4/95/18314026732454294752/podvesnoj-most-v-centre-goroda.jpg" alt=""/>
            </div>
            <div>
                Ава и описание
                <img src="https://www.sibirds.ru/photos/0515/004/05150160601.jpg" alt=""/>
            </div>
            <MyPosts/>
        </div>)
}
export default Profile;