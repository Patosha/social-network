import styles from './Messages.module.css';
import React from "react";
import {MessageItem} from "./MessageItem";

const Messages = () => {

    let messagesData = [
        {
            id: 1,
            avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
            name: 'Ivanov Ivan',
            time: '23:15',
            text: 'React - JavaScript-библиотека для создания пользовательских интерфейсов',
        },
        {
            id: 2,
            avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-na-telefon.jpg",
            name: 'Petrov Dima',
            time: '08:15',
            text: 'Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз.',
        },
        {
            id: 3,
            avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/01/funny-ava-7.jpg",
            name: 'Semenov Sergey',
            time: '12:15',
            text: 'Это JSX — расширение языка JavaScript. Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI. JSX напоминает язык шаблонов, наделённый силой JavaScript.',
        },
    ]

    let messagesElements = messagesData.map((message) =>
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
