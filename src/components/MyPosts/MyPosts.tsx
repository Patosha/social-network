import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    let postsDate = [
        {
            id: 1,
            name: 'Klark Kent',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava5.jpg',
            date: '18 ноября 2015',
            text: 'Ку!',
            likesCount: 12,
        },
        {
            id: 2,
            name: 'Lex Luthor',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            date: '18 декабря 2015',
            text: 'Как дела?',
            likesCount: 10,
        },
    ]

    let postsElements = postsDate.map(post =>
        <Post
            id={post.id}
            name={post.name}
            avatar={post.avatar}
            date={post.date}
            text={post.text}
            likesCount={post.likesCount}
        />
    )

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.title}>
                My posts
            </h3>

            <form action="#" className={styles.form}>

                <textarea className={styles.news} name="message" id="#" placeholder="your news..." required>
                </textarea>

                <button className={styles.button} type="submit">
                    Add post
                </button>
            </form>

            {postsElements}
        </div>
    )
}

export default MyPosts;