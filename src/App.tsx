import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">

                <Header/>
                <Sidebar/>

                <section className="hero">
                    <Profile/>
                </section>


                <footer className="footer">

                </footer>

            </div>
        </div>
    );
}

export default App;
