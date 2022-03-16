import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


const MyPosts = () => {
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
            <Post message='Привет!'/>
            <Post message='Как дела?'/>
            <Post message='Ку!'/>
        </div>
    )
}

export default MyPosts;