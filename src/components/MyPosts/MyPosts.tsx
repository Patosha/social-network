import styles from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import {AddPostActionPropsType, PostsDatePropsType} from "../../redux/state";

export type MyPostsTypeProps = {
    postsData: Array<PostsDatePropsType>
    dispatch: (action: AddPostActionPropsType) => void
}

const MyPosts = (props: MyPostsTypeProps) => {

    let postsElements = props.postsData.map((post) =>
        <Post
            key={post.id}
            id={post.id}
            name={post.name}
            avatar={post.avatar}
            date={post.date}
            text={post.text}
            likesCount={post.likesCount}
        />
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {

        if (newPostElement.current) {
            // props.dispatch(newPostElement.current.value)
            props.dispatch({ type: 'ADD-POST',messageText: string})
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={styles.myPosts}>
            <h3 className={styles.title}>
                My posts
            </h3>

            <form action="#" className={styles.form}>

                <textarea ref={newPostElement} className={styles.news} name="message" id="#" placeholder="your news...">
                </textarea>

                <button className={styles.button} type="button" onClick={addPostHandler}>
                    Add post
                </button>
            </form>

            {postsElements}
        </div>
    )
}
export default MyPosts;