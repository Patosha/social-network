import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {postsDate} from "../../index";

const MyPosts = (props:) => {

    let postsElements = postsDate.map((post) =>
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