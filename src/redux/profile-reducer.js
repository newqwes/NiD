import {
  profileAPI
} from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const CHANGE_PHOTO_SUCCESS = "CHANGE_PHOTO_SUCCESS";

let inicialState = {
  postData: [{
      id: 0,
      dateTime: "16 июня, 09:32",
      avatar: "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png",
      name: "Аня",
      postText: "Привет",
    },
    {
      id: 1,
      dateTime: "19 июня, 10:54",
      avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png",
      name: "Майя",
      postText: "Привет это Майя",
    },
    {
      id: 2,
      dateTime: "04 сентябрь, 21:04",
      avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      name: "Назар",
      postText: "Дата последнего обновления, время поста!",
    },
  ],
  ownInformation: {
    name: "Назар",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
  },
  userProfile: null,
  status: "",
};
const profilePageReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let date = new Date();
      let options = {
        month: "long",
        day: "numeric",
        timezone: "UTC",
        hour: "numeric",
        minute: "numeric",
      };
      let idNumberAdd = state.postData[2].id + 1; // меняю id по мере их добавления временно можно удалить и поставить статичный id: 3
      let postItem = {
        id: idNumberAdd,
        avatar: state.ownInformation.avatar,
        name: `${state.ownInformation.name}`,
        dateTime: `${date.toLocaleString("ru", options)}`,
        postText: action.postTextarea,
      };
      return {
        ...state,
        postData: [postItem, ...state.postData],
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state, userProfile: action.userProfile
      };
    case SET_USER_STATUS:
      return {
        ...state, status: action.status
      };
    case CHANGE_PHOTO_SUCCESS:
      return {
        ...state, userProfile: {
          ...state.userProfile,
          photos: action.photos
        }
      };

    default:
      return state;
  }
};

export const addPost = (postTextarea) => ({
  type: ADD_NEW_POST,
  postTextarea
});
const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
const changePhotoSuccess = (photos) => ({
  type: CHANGE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userUrlId) => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userUrlId);
  dispatch(setUserProfile(data));
};
export const getUserStatus = (userUrlId) => async (dispatch) => {
  let data = await profileAPI.getUserStatus(userUrlId);
  dispatch(setUserStatus(data));
};
export const updateUserStatus = (status) => async (dispatch) => {
  let respons = await profileAPI.updateUserStatus(status);
  if (respons.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const changePhoto = (photo) => async (dispatch) => {
  let respons = await profileAPI.changePhoto(photo);
  if (respons.data.resultCode === 0) {
    dispatch(changePhotoSuccess(respons.data.data.photos));
  }
};

export default profilePageReducer;