import { userAPI } from '../api/api';
import { ADD_EXCHANGE_RATE } from './types';

let initialState = {
  menuItemData: [
    { id: 0, value: 'Мой профиль', linkUrl: '/Profile' },
    { id: 1, value: 'Сообщения', linkUrl: '/Dialogs' },
    { id: 2, value: 'Пользователи', linkUrl: '/Users' },
  ],
  exchangeRate: null,
};

const sidebarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXCHANGE_RATE: {
      return { ...state, exchangeRate: action.rate };
    }
    default:
      return state;
  }
};

const addNewExchangeRate = (rate) => ({ type: ADD_EXCHANGE_RATE, rate });

export const getRates = () => async (dispatch) => {
  let rate = await userAPI.getRates();
  dispatch(addNewExchangeRate(rate));
};

export default sidebarPageReducer;
