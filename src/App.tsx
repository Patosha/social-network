import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {MessageDataPropsType, PostsDatePropsType} from "./index";

export type AppPropsType = {
    postsData: Array<PostsDatePropsType>
    messagesData: Array<MessageDataPropsType>
    id: number
    name: string
    avatar: string
    date: string
    text: string
    likesCount: number
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-wrapper">

                    <Header/>
                    <Sidebar/>

                    <section className="hero">
                        <Route path='/profile' render={() => <Profile postsDate={props.postsData}/>}/>
                        <Route path='/messages' render={() => <Messages messagesData={props.messagesData}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
