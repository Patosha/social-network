import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <section className={styles.sidebar}>

            <nav className={styles.nav}>
                <ul className={`${styles.list} ${styles.list_reset}`}>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">
                            Profile
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">
                            Messages
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">
                            News
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">
                            Music
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a className={styles.link} href="#">
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default Sidebar;