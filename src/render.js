import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './style/_base/_base.scss';
import './style/_base/_normalize.scss'
import { BrowserRouter } from 'react-router-dom';
import { addNewPost, addNewMessage } from './redux/state.js';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
}

export default rerenderEntireTree;
