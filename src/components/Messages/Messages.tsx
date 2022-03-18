import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css';
import React from "react";

type messageDataType = {
    id: number
    avatar: string
    name: string
    time: string
    text: string
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

    let messagesElements = messagesData.map(message =>
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