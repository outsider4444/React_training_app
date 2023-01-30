import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.state.postData.map(post =>
        <Post key={post.id} name={post.name} post={post.text} likes={post.likesCount}/>);

    let newPostElement = React.createRef(); //ref = {} -> присвоение ссылки к элементу html

    let addPost = () => {
        props.addPost();
    }
    // Ререндер страницы посимвольно. Концепция FLUX.
    let onPostChange = () => {
        let text = newPostElement.current.value; // получение значения элемента
        props.updateNewPostText(text); // Отправка значения в переменную в state
    }

    return (
        <div className={style.postsBlock}>
            <h3>Мои посты</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement} rows="5"
                    placeholder={"Введите текст..."}
                    value={props.state.newPostText}/>
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