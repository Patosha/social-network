export type MessageDataPropsType = {
    id: number
    avatar: string
    name: string
    time: string
    text: string
}

export type PostsDatePropsType = {
    id: number
    name: string
    avatar: string
    date: string
    text: string
    likesCount: number
}

export type myFriendsPropsType = {
    id: number
    name: string
    avatar: string
}

export type ProfileType = {
    postsData: Array<PostsDatePropsType>
}

export type MessagesType = {
    messagesData: Array<MessageDataPropsType>
}

export type SidebarType = {
    sidebar: Array<myFriendsPropsType>
}

export type StatePropsType = {
    profile: ProfileType
    messages: MessagesType
    // sidebar: SidebarType
}

export type AddPostActionPropsType = {
    type: 'ADD-POST'
    messageText: string
}

export type StorePropsType = {
    _state: StatePropsType
    _callSubscriber: (_state: StatePropsType) => void
    getState: () => StatePropsType
    subscribe: (callback: (state: StatePropsType) => void) => void
    addPost: (messageText: string) => void
    dispatch: (action: AddPostActionPropsType) => void
}

export let store: StorePropsType = {
    _state: {
        profile: {
            postsData: [
                {
                    id: 1,
                    name: 'Klark Kent',
                    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava5.jpg',
                    date: '18 ноября 2015',
                    text: 'Ку!',
                    likesCount: 12,
                },
                {
                    id: 2,
                    name: 'Lex Luthor',
                    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
                    date: '18 декабря 2015',
                    text: 'Как дела?',
                    likesCount: 10,
                },
            ]
        },
        messages: {
            messagesData: [
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
        },
        // sidebar: {
        //     myFriends: [
        //         {
        //             id: 1,
        //             avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
        //             name: 'Ivanov Ivan',
        //         },
        //         {
        //             id: 2,
        //             avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-na-telefon.jpg",
        //             name: 'Petrov Dima',
        //         },
        //         {
        //             id: 3,
        //             avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/01/funny-ava-7.jpg",
        //             name: 'Semenov Sergey',
        //         },
        //     ]
        // }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost(messageText: string) {

        const newPost: PostsDatePropsType = {
            id: 5,
            name: 'Klark Kent',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava5.jpg',
            date: '18 июня 2020',
            text: messageText,
            likesCount: 7,
        }
        this._state.profile.postsData.unshift(newPost)
        this._callSubscriber(this._state)
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostsDatePropsType = {
                id: 5,
                name: 'Klark Kent',
                avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/01/man-ava5.jpg',
                date: '18 июня 2020',
                text: action.messageText,
                likesCount: 7,
            }
            this._state.profile.postsData.push(newPost)
            this._callSubscriber(this._state)
        }
    }
}
// window.store = store;