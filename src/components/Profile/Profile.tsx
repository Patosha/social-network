import styles from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className={styles.profile}>
                <img className={styles.avatar}
                     src="https://st3.depositphotos.com/2788703/16692/i/600/depositphotos_166923204-stock-photo-digital-illustration-of-a-lion.jpg"
                     alt="avatar"/>
                <div className={styles.info}>
                    <h3 className={styles.title}>
                        Anton Fedorov
                    </h3>
                    <ul className={`${styles.list} ${styles.list_reset}`}>
                        <li className={styles.item}>
                            Date of Birth:
                            <span className={styles.text}>
                            12.05.1986
                        </span>
                        </li>
                        <li className={styles.item}>
                            Сity:
                            <span className={styles.text}>
                            Pskov
                        </span>
                        </li>
                        <li className={styles.item}>
                            Education:
                            <span className={styles.text}>
                            PSU'2025
                        </span>
                        </li>
                        <li className={styles.item}>
                            Web site:
                            <a className={styles.link} href="#">
                            <span className={styles.text}>
                                https://it-incubator.ru/
                            </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <MyPosts/>
        </>
    )
}

export default Profile;