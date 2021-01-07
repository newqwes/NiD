import initialState from './initialState';
import { USERS } from '../constants';

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.SUBSCRIBE_SUCCESS:
      return {
        ...state,
        usersData: state.usersData.map((n) => {
          if (n.id === action.id) return { ...n, followed: true };
          return n;
        }),
      };
    case USERS.UNSUBSCRIBE_SUCCESS:
      return {
        ...state,
        usersData: state.usersData.map((n) => {
          if (n.id === action.id) return { ...n, followed: false };
          return n;
        }),
      };
    case USERS.SET_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.users,
      };
    case USERS.TOTAL_AMOUNT_USERS:
      return {
        ...state,
        totalAmountUsers: action.count,
      };
    case USERS.SET_USERS_PAGE_SUCCESS:
      return {
        ...state,
        currentPageUsers: action.pageNumber,
      };
    case USERS.IS_UPLOADED:
      return {
        ...state,
        isUploaded: action.isUploadedValue,
      };
    case USERS.IS_ANSVER_GONE:
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
