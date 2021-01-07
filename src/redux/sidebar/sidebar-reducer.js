import { SIDEBARS } from '../constants';
import initialState from './initialState';

const sidebarPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBARS.SET_EXCHANGE_RATE_SUCCESS: {
      return { ...state, exchangeRate: action.payload };
    }
    default:
      return state;
  }
};

export default sidebarPageReducer;
