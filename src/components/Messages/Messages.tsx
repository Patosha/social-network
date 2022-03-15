import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css';

const Messages = () => {
    return (
        <ul className={`${styles.list} list_reset`}>
            <li className={styles.item}>

                <div className={styles.avatar}>
                    <img className={styles.img}
                         src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                         alt=""/>
                </div>

                <div className={styles.messageTop}>
                    <NavLink className={styles.title} to='/messages/1'>
                        Ivanov Ivan
                    </NavLink>
                    <span className={styles.time}>
                        23:15
                    </span>
                </div>
                <p className={styles.text}>
                    Hey!
                    How are you?
                </p>
            </li>
            <li className={styles.item}>
                <img className={styles.img}
                     src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                     alt=""/>
                <div className={styles.messageTop}>
                    <NavLink className={styles.title} to='/messages/2'>
                        Ivanov Ivan
                    </NavLink>
                    <span className={styles.time}>
                        23:15
                    </span>
                </div>
                <p className={styles.text}>
                    Hey!
                    How are you?
                </p>
            </li>
        </ul>
    )
}

export default Messages;