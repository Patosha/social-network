import {NavLink} from 'react-router-dom';
import styles from './Messages.module.css';
import React from "react";

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

    let messageData = [
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

    return (
        <ul className={`${styles.list} list_reset`}>
            <MessageItem
                id={messageData[0].id}
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                time={messageData[0].time}
                text={messageData[0].text}
            />
            <MessageItem
                id={messageData[1].id}
                avatar={messageData[1].avatar}
                name={messageData[1].name}
                time={messageData[1].time}
                text={messageData[1].text}
            />
            <MessageItem
                id={messageData[2].id}
                avatar={messageData[2].avatar}
                name={messageData[2].name}
                time={messageData[2].time}
                text={messageData[2].text}
            />
        </ul>
    )
}

export default Messages;