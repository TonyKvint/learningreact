import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: "Hi, how are you?", likesCount: 2 },
  { id: 2, message: "It's my first post", likesCount: 19 },
  { id: 3, message: "Hey, everyone!", likesCount: 5 },
];

let dialogsData = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Veronica" },
  { id: 3, name: "Alexey" },
  { id: 4, name: "Brother" },
  { id: 5, name: "Mom" },
  { id: 6, name: "Max" },
  { id: 7, name: "Seva" },
];

let messagesData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "What's up?" },
  { id: 3, message: "How's your react lessons?" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
