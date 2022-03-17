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


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="app-wrapper">

                    <Header/>
                    <Sidebar/>

                    <section className="hero">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/messages' component={Messages}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </section>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
