import styles from './Messages.module.css';
import React from "react";
import {MessageItem} from "./MessageItem";
import {MessagesType} from "../../redux/state";


export type MessagesTypeProps = {
    state: MessagesType
}

const Messages = (props: MessagesTypeProps) => {

    let messagesElements = props.state.messagesData.map((message) =>
        <MessageItem
            id={message.id}
            avatar={message.avatar}
            name={message.name}
            time={message.time}
            text={message.text}
        />
    )

    return (
        <ul className={`${styles.list} list_reset`}>
            {messagesElements}
        </ul>
    )
}

export default Messages;
