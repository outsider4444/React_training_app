import React from "react";
import style from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={style.item}>
            <img src="https://vraki.net/sites/default/files/inline/images/1_6.png" alt=""/>
            <span>{props.name}</span>
            <p>{props.post}</p>

        </div>
    )
}
export default Post;