import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        {/*    props рописывать можно прямо в элементе */}
                        <Route path="/settings" element={<Settings check={" Привет"}/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
