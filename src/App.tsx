import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";


const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">

                <Header/>
                <Sidebar/>

                <section className="hero">
                    <Profile/>
                    <MyPosts/>
                </section>
            </div>
        </div>
    );
}

export default App;
