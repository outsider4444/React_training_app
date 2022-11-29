import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div className={style.content}>
            <ProfileInfo friendsData={props.state.friendsData} />
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>)
}
export default Profile;