import styles from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type MessageDataType = {
    id: number
    avatar: string
    name: string
    time: string
    text: string
}

export const MessageItem = (props: MessageDataType) => {
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