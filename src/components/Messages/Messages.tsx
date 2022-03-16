import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css';
import React from "react";

const messageData = {
    avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    name: 'Ivanov Ivan',
    time: '23:15',
    text: 'How are you?',
    id: 1
}

type messageDataType = {
    avatar: string
    name: string
    time: string
    text: string
    id: number
}

const MessageItem = (props: messageDataType) => {
    return (
        <li className={styles.item}>

            <img className={styles.avatar} src={`${props.avatar}`} alt={"avatar"}/>

            <div className={styles.wrap}>
                <div className={styles.messageTop}>
                    <NavLink className={styles.title} to={'/messages/' + props.id}>
                        {props.name}
                    </NavLink>
                    <span className={styles.time}>
                        {props.time}
                    </span>
                </div>
                <p className={styles.text}>
                    {props.text}
                </p>
            </div>
        </li>
    )
}

const Messages = () => {
    return (
        <ul className={`${styles.list} list_reset`}>
            <MessageItem
                avatar={messageData.avatar}
                name={messageData.name}
                time={messageData.time}
                text={messageData.text}
                id={messageData.id}
            />
            <MessageItem
                avatar={messageData.avatar}
                name={messageData.name}
                time={messageData.time}
                text={messageData.text}
                id={messageData.id}
            />
        </ul>
    )
}

export default Messages;