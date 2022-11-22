import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () =>{

    let postData = [
        { id: "1", text: "Привет", name: "Dima", likesCount: 12 }, { id: "2", text: "Букет", name: "Danya", likesCount: 0 },
        { id: "3", text: "Омлет", name: "Lesha", likesCount: 1 },
    ]

    let postsElements = postData.map( post => <Post name={post.name} post={post.text} likes={post.likesCount} />);

    return(
            <div className={style.postsBlock}>
                <h3>Мои посты</h3>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder={"Текст поста"}></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
                <div className={style.posts}>
                    Список постов
                    {postsElements}
                </div>
            </div>
    )
}
export default MyPosts;