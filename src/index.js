
import './style/_base/_base.scss';
import './style/_base/_normalize.scss'
import rerenderEntireTree from './render.js';
import state from './redux/state';

rerenderEntireTree(state)