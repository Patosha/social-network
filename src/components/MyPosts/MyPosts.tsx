import styles from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import {PostsDatePropsType} from "../../index";

export type MyPostsTypeProps = {
    id: number
    name: string
    avatar: string
    date: string
    text: string
    likesCount: number
    postsData: Array<PostsDatePropsType>
}

const MyPosts = (props: MyPostsTypeProps) => {
    let postsElements = props.postsData.map((post) =>

        <Post
            id={props.id}
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