import initialState from './initialState';
import {
  IS_ANSVER_GONE,
  IS_UPLOADED,
  SET_USERS,
  SET_USERS_PAGE,
  SUBSCRIBE,
  TOTAL_AMOUNT_USERS,
  UNSUBSCRIBE,
} from './types';

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        usersData: state.usersData.map((n) => {
          if (n.id === action.id) return { ...n, followed: true };
          return n;
        }),
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        usersData: state.usersData.map((n) => {
          if (n.id === action.id) return { ...n, followed: false };
          return n;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        usersData: action.users,
      };
    case TOTAL_AMOUNT_USERS:
      return {
        ...state,
        totalAmountUsers: action.count,
      };
    case SET_USERS_PAGE:
      return {
        ...state,
        currentPageUsers: action.pageNumber,
      };
    case IS_UPLOADED:
      return {
        ...state,
        isUploaded: action.isUploadedValue,
      };
    case IS_ANSVER_GONE:
      return {
        ...state,
        isAnswerGone: action.booleanValue
          ? [...state.isAnswerGone, action.id]
          : state.isAnswerGone.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export default usersPageReducer;
