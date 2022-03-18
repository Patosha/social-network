import styles from './Post.module.css';

type PostPropsType = {
    id: number
    name: string
    avatar: string
    date: string
    text: string
    likesCount: number
}

const Post = (props: PostPropsType) => {

    return (
        <div className={styles.post}>

            <img className={styles.avatar}
                 src={`${props.avatar}`} alt="avatar"/>

            <div className={styles.content}>

                <h3 className={styles.name}>
                    {props.name}
                </h3>

                <time className={styles.date} dateTime="2015-11-18">
                    {props.date}
                </time>

                <p className={styles.text}>
                    {props.text}
                </p>

                <button className={styles.like}>
                    like_
                    {props.likesCount}
                </button>
            </div>
        </div>
    )
}

export default Post;