import styles from './Post.module.css';

type PostPropsType = {
    message: string
    id: number
}

const Post = (props: PostPropsType) => {

    return (
        <div className={styles.post}>

            <img className={styles.avatar}
                 src={`${postDate[0].avatar}`} alt="avatar"/>

            <div className={styles.content}>

                <h3 className={styles.name}>
                    {postDate[0].name}
                </h3>

                <time className={styles.date} dateTime="2015-11-18">
                    {postDate[0].date}
                </time>

                <p className={styles.text}>
                    {postDate[0].text}
                </p>

                <button className={styles.like}>
                    like_
                    {postDate[0].likesCount}
                </button>
            </div>
        </div>
    )
}

export default Post;