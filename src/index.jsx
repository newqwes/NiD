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
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
};
setInterval(rerenderEntireTree, 1000); // Вызываем каждую секунду чисто ради часов сделал, можно удалить тогда только часы перестанут работать
rerenderEntireTree(store.getState()); //вызываем первый рендерин страницы передаем ей стейт который по дефолту стоит
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
}); //передаем стору в субскрайб, колбак функцию, что бы она от туда вызывал и по новому ререндорила нашу страницу