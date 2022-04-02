import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
    <App
        postsData={postsDate}
        messagesData={messagesData}
    />,
    document.getElementById('root')
);
