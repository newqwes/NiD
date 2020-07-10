const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";

let inicialState = {
    postData: [
        { id: 0, dateTime: "16 июня, 09:32", avatar: "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png", name: "Аня", postText: "Привет" },
        { id: 1, dateTime: "19 июня, 10:54", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", name: "Майя", postText: "Привет это Майя" },
        { id: 2, dateTime: "10 июля, 18:37", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", name: "Азим", postText: "Дата последнего обновления, время поста!" }
    ],
    galaryPhotosData: [
        { id: 0, urlGalaryPhoto: "https://cdn.pixabay.com/photo/2020/03/18/19/08/landscape-4945254_960_720.jpg" },
        { id: 1, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/506/56274286d6905.jpg" },
        { id: 2, urlGalaryPhoto: "https://poster.nicefon.ru/2016_09/26/1080x610/1582397179b17071f8f9f0.jpg" },
        { id: 3, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/782/588ef87f91541.jpg" }
    ],
    ownInformation: {
        name: "Назар", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
    },
    postTextarea: ""
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
                    dateTime: `${date.toLocaleString("ru", options)}`, //просто смотрю какое сообщение выводится по количеству можно просто оставить state.ownInformation.name
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

export const addPostAC = () => ({ type: ADD_NEW_POST });
export const onChangePostTextareaAC = (textareaValue) => ({ type: CHANGE_POST_TEXTAREA, textareaValue });
export default profilePageReducer;