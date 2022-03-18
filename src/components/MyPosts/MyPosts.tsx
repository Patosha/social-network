import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = () => {
    let postsDate = [
        {
            id: 1,
            name: 'Klark Kent',
            avatar: 'https://e7.pngegg.com/pngimages/876/481/png-clipart-tom-welling-smallville-clark-kent-superman-fireworks-s-heroes-krypton.png',
            date: '18 ноября 2015',
            text: 'Ку!',
            likesCount: 12,
        },
        {
            id: 2,
            name: 'Lex Luthor',
            avatar: 'https://www.peoples.ru/art/cinema/characters/lex_luthor/luthor_1.jpg',
            date: '18 декабря 2015',
            text: 'Как дела?',
            likesCount: 10,
        },
    ]

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

            <Post
                id={postsDate[0].id}
                name={postsDate[0].name}
                avatar={postsDate[0].avatar}
                date={postsDate[0].date}
                text={postsDate[0].text}
                likesCount={postsDate[0].likesCount}
            />
            <Post
                id={postsDate[1].id}
                name={postsDate[1].name}
                avatar={postsDate[1].avatar}
                date={postsDate[1].date}
                text={postsDate[1].text}
                likesCount={postsDate[1].likesCount}
            />

        </div>
    )
}

export default MyPosts;