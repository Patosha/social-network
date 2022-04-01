import styles from './Messages.module.css';
import React from "react";
import {MessageItem} from "./MessageItem";
import {MessageDataPropsType} from "../../index";

export type MessagesTypeProps = {
    id: number
    avatar: string
    name: string
    time: string
    text: string
    messagesData: Array<MessageDataPropsType>
}

const Messages = (props: MessagesTypeProps) => {

    let messagesElements = props.messagesData.map((message) =>
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
