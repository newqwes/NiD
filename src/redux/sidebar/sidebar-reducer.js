import initialState from './initialState';
import { ADD_EXCHANGE_RATE } from './types';

const sidebarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXCHANGE_RATE: {
      return { ...state, exchangeRate: action.rate };
    }
    default:
      return state;
  }
};

export default sidebarPageReducer;
