import initialState from './initialState';
import { APPS } from '../constants';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPS.INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;
