import './style/_base/_base.scss';
import './style/_base/_normalize.scss';
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './style/_base/_base.scss';
import './style/_base/_normalize.scss'
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
};
rerenderEntireTree(store.setState());
store.subscribe(rerenderEntireTree);