import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {AddPostActionPropsType, StatePropsType} from "./redux/state";

export type AppPropsType = {
    state: StatePropsType
    dispatch: (action: AddPostActionPropsType) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="container">
            <div className="app-wrapper">

                <Header/>

                <Sidebar
                    // state={props.state.sidebar}
                />

                <section className="hero">
                    <Route path='/profile' render={() =>
                        <Profile
                            state={props.state.profile}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/messages' render={() =>
                        <Messages
                            state={props.state.messages}
                        />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </section>
            </div>
        </div>
    );
}

export default App;
