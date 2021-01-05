import { userAPI } from '../api/api';
import {
  IS_ANSVER_GONE,
  IS_UPLOADED,
  SET_USERS,
  SET_USERS_PAGE,
  SUBSCRIBE,
  TOTAL_AMOUNT_USERS,
  UNSUBSCRIBE,
} from './types';

let initialState = {
  usersData: [],
  totalAmountUsers: 0,
  usersOnPage: 7,
  currentPageUsers: 1,
  isUploaded: true,
  isAnswerGone: [],
};

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
        isAnswerGone: action.booleanValue // если запрос пошел тогда
          ? [...state.isAnswerGone, action.id] // записываем пользователя в массив
          : state.isAnswerGone.filter((id) => id !== action.id), // иначе удаляем id которая пришла (значит загрузилась). П,С, вот тут я уж точно не вспомню что делал))
      };
    default:
      return state;
  }
};

export const subscribe = (id) => ({ type: SUBSCRIBE, id });
export const unsubscribe = (id) => ({ type: UNSUBSCRIBE, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setAmountUsers = (count) => ({ type: TOTAL_AMOUNT_USERS, count });
export const setUsersPage = (pageNumber) => ({
  type: SET_USERS_PAGE,
  pageNumber,
});

export const isUploadedDis = (isUploadedValue) => ({
  type: IS_UPLOADED,
  isUploadedValue,
});

export const isAnsverGoneAC = (booleanValue, id) => ({
  type: IS_ANSVER_GONE,
  booleanValue,
  id,
});

export const getUsers = (usersOnPage, currentPageUsers) => async (dispatch) => {
  dispatch(isUploadedDis(false));
  let data = await userAPI.getUsers(usersOnPage, currentPageUsers);
  dispatch(setUsers(data.items));
  dispatch(setAmountUsers(data.totalCount));
  dispatch(isUploadedDis(true));
};

export const follow = (id) => async (dispatch) => {
  dispatch(isAnsverGoneAC(true, id));
  let data = await userAPI.postUserFollow(id);
  if (data.resultCode === 0) {
    dispatch(subscribe(id));
  }
  dispatch(isAnsverGoneAC(false, id));
};

export const unfollow = (id) => async (dispatch) => {
  dispatch(isAnsverGoneAC(true, id));
  let data = await userAPI.deleteUserFollow(id);
  if (data.resultCode === 0) {
    dispatch(unsubscribe(id));
  }
  dispatch(isAnsverGoneAC(false, id));
};

export default usersPageReducer;
