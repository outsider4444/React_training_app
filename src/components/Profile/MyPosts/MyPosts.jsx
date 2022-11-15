import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
const MyPosts = () =>{
    return(
            <div>
                Мои посты
                <div>
                    Новый пост
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder={"Текст поста"}></textarea>
                <button>Добавить пост</button>
                <div>
                    Список постов
                    <Post name={"Dima"} post={"Текст 1"}/>
                    <Post name={"Danya"} post={"Текст 2"}/>
                    <Post name={"Lesha"} post={"Текст 3"}/>
                    <Post name={"Shenya"} post={"Текст 4"}/>
                    <Post name={"Dima"} post={"Текст 5"}/>
                </div>
            </div>
    )
}
export default MyPosts;