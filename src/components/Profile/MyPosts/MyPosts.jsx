import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) =>{
    let postsElements = props.postData.map( post => <Post name={post.name} post={post.text} likes={post.likesCount} />);

    let newPostElement = React.createRef(); //ref ={} -> присвоение ссылки к элементу html

    let addPost = () =>{
        let text = newPostElement.current.value; // получение значения элемента
        props.addPost(text);
    }
    return(
            <div className={style.postsBlock}>
                <h3>Мои посты</h3>
                <div>
                    <textarea ref={newPostElement} rows="5" placeholder={"Текст поста"}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Добавить пост</button>
                </div>
                <div className={style.posts}>
                    Список постов
                    {postsElements}
                </div>
            </div>
    )
}
export default MyPosts;