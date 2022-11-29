import React from "react";
import style from './ProfileInfo.module.css';
import Friends from "../Friend/Friends";
import Post from "../MyPosts/Post/Post";

const ProfileInfo = (props) => {
    let friendElements = props.friendsData.map( friend => <Friends id={friend.id} name={friend.name} avatar={friend.avatar} />);
    return (
        <div>
            <div>
                <img
                    src="https://million-wallpapers.ru/wallpapers/4/95/18314026732454294752/podvesnoj-most-v-centre-goroda.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <div>
                    Ава и описание
                </div>
                <div>
                    <img src="https://www.sibirds.ru/photos/0515/004/05150160601.jpg" alt=""/>
                </div>
            </div>
            <div>
                Друзья
            </div>
            <div className={style.friends}>
                {friendElements}
            </div>
        </div>)
}
export default ProfileInfo;