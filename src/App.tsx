import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <div className="app-wrapper">

                <header className="header">

                    <img className="logo"
                         src="https://it-incubator.ru/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8a063c2a.svg&w=256&q=75"
                         alt="logo"/>

                </header>


                <section className="sidebar">

                    <nav className="nav">
                        <ul className="nav__list list-reset">
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    Profile
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    Messages
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    News
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    Music
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#">
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>

                </section>

                <section className="hero">
                    <div className="profile">
                        <img className="profile__avatar"
                             src="https://st3.depositphotos.com/2788703/16692/i/600/depositphotos_166923204-stock-photo-digital-illustration-of-a-lion.jpg"
                             alt="avatar"/>
                        <div className="profile__info">
                            <h3 className="profile__title">
                                Anton Fedorov
                            </h3>
                            <ul className="profile__list list-reset">
                                <li className="profile__item">
                                    Date of Birth:
                                    <span className="profile__text">
                                        12.05.1986
                                    </span>
                                </li>
                                <li className="profile__item">
                                    Сity:
                                    <span className="profile__text">
                                        Pskov
                                    </span>
                                </li>
                                <li className="profile__item">
                                    Education:
                                    <span className="profile__text">
                                        PSU'2025
                                    </span>
                                </li>
                                <li className="profile__item">
                                    Web site:
                                    <a className="profile__link" href="#">
                                        <span className="profile__text">
                                          https://it-incubator.ru/
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                <footer className="footer">

                </footer>

            </div>
        </div>
    )
        ;
}

export default App;
