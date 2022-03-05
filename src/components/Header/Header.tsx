import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>

            <img className={styles.logo}
                 src="https://it-incubator.ru/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8a063c2a.svg&w=256&q=75"
                 alt="logo"/>

        </header>
    )
}

export default Header;