import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <section className={styles.sidebar}>

            <nav className={styles.nav}>
                <ul className={`${styles.list} list_reset`}>

                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/profile" activeClassName={styles.active}>
                            Profile
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/messages" activeClassName={styles.active}>
                            Messages
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/news" activeClassName={styles.active}>
                            News
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/music" activeClassName={styles.active}>
                            Music
                        </NavLink>
                    </li>

                    <li className={styles.item}>
                        <NavLink className={styles.link} to="/settings" activeClassName={styles.active}>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Sidebar;