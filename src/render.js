import App from "./App";
import {addPost} from "./redux/state";
import ReactDOM from 'react-dom/client';
import React from "react";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>
    )
}