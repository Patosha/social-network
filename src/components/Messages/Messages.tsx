import styles from './Messages.module.css';

const Messages = () => {
    return (
        <ul className={`${styles.list} list_reset`}>
            <li className={styles.item}>
                <img className={styles.avatar} src="" alt=""/>
                <div className={styles.messageTop}>
                    <h3 className={styles.title}>
                        Ivanov Ivan
                    </h3>
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
                <img className={styles.avatar} src="" alt=""/>
                <div className={styles.messageTop}>
                    <h3 className={styles.title}>
                        Ivanov Ivan
                    </h3>
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