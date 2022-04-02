import styles from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import {ProfileType} from "../../redux/state";


export type ProfilePropsType = {
    state: ProfileType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <div className={styles.profile}>
                <img className={styles.avatar}
                     src="https://st3.depositphotos.com/2788703/16692/i/600/depositphotos_166923204-stock-photo-digital-illustration-of-a-lion.jpg"
                     alt="avatar"
                />

                <div className={styles.info}>
                    <h3 className={styles.title}>
                        Anton Fedorov
                    </h3>

                    <ul className={`${styles.list} ${styles.list_reset}`}>

                        <li className={styles.item}>
                            <span className={styles.text}>
                                Date of Birth:
                            </span>
                            12.05.1986
                        </li>

                        <li className={styles.item}>
                            <span className={styles.text}>
                             Сity:
                        </span>
                            Pskov
                        </li>

                        <li className={styles.item}>
                            <span className={styles.text}>
                            Education:
                        </span>
                            PSU'2025
                        </li>

                        <li className={styles.item}>
                            <a className={styles.link} href="#">
                            <span className={styles.text}>
                                  Web site:
                            </span>
                                https://it-incubator.ru/
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <MyPosts
                postsData={props.state.postsData}
            />
        </>
    )
}

export default Profile;