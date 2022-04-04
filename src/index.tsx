import React from 'react';
import './index.css';
import {addPost, state, StatePropsType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App
                state={state}
                addPost={addPost}
            />

        </BrowserRouter>, document.getElementById('root')
    );

}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
