import './style/_base/_base.scss';
import './style/_base/_normalize.scss';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './style/_base/_base.scss';
import './style/_base/_normalize.scss'
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
};
rerenderEntireTree(store.getState()); //вызываем первый рендерин страницы передаем ей стейт который по дефолту стоит
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state)
}); //передаем стору в субскрайб, колбак функцию, что бы она от туда вызывал и по новому ререндорила нашу страницу