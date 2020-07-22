import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";

let inicialState = {
    postData: [
        { id: 0, dateTime: "16 июня, 09:32", avatar: "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png", name: "Аня", postText: "Привет" },
        { id: 1, dateTime: "19 июня, 10:54", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", name: "Майя", postText: "Привет это Майя" },
        { id: 2, dateTime: "19 июля, 00:56", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", name: "Назар", postText: "Дата последнего обновления, время поста!" }
    ],
    ownInformation: {
        name: "Назар", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
    },
    postTextarea: "",
    userProfile: null,
    userStatus: null
}
const profilePageReducer = (state = inicialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            {
                let date = new Date();
                let options = {
                    month: 'long',
                    day: 'numeric',
                    timezone: 'UTC',
                    hour: 'numeric',
                    minute: 'numeric'
                };
                let idNumberAdd = state.postData[2].id + 1 // меняю id по мере их добавления временно можно удалить и поставить статичный id: 3
                let postItem = {
                    id: idNumberAdd,
                    avatar: state.ownInformation.avatar,
                    name: `${state.ownInformation.name}`,
                    dateTime: `${date.toLocaleString("ru", options)}`,
                    postText: state.postTextarea
                }
                return {
                    ...state,
                    postData: [postItem, ...state.postData],
                    postTextarea: ""
                }
            }
        case CHANGE_POST_TEXTAREA: return { ...state, postTextarea: action.textareaValue };

        default: return state;
    }
}

export const addPost = () => ({ type: ADD_NEW_POST });
export const onChangePostTextarea = (textareaValue) => ({ type: CHANGE_POST_TEXTAREA, textareaValue });

export const getUserProfile = (userUrlId) => (dispatch) => {
        if (!userUrlId) {
            userUrlId = 5632
        }
        profileAPI.getUserProfile(userUrlId).then(data => {
            inicialState.userProfile = data
        })
        profileAPI.getUserStatus(userUrlId).then(data => {
            inicialState.userStatus = data
        })
}

export default profilePageReducer;