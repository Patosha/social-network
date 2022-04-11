import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StatePropsType, store} from "./redux/state";

const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App
                state={state}
                addPost={store.addPost.bind(store)}
            />

        </BrowserRouter>, document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
