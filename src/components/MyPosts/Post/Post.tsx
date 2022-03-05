import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.post}>

            <img className={styles.avatar}
                 src="https://e7.pngegg.com/pngimages/876/481/png-clipart-tom-welling-smallville-clark-kent-superman-fireworks-s-heroes-krypton.png"
                 alt="avatar"/>

            <div className={styles.content}>

                <h3 className={styles.title}>Klark Kent</h3>

                <time className={styles.date} dateTime="2015-11-18">
                    18 ноября 2015
                </time>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi aspernatur consectetur
                    ea eveniet fugit neque officiis optio reprehenderit sapiente. Dolores, id, omnis? Ab
                    adipisci at hic labore reprehenderit temporibus.
                </p>

                <button className={styles.like}>
                    like
                </button>
            </div>
        </div>
    )
}

export default Post;