const Sidebar = () => {
    return (
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
    )
}

export default Sidebar;