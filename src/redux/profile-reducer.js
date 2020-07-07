const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let idNumberAdd = state.postData[2].id + 1 // меняю id по мере их добавления временно можно удалить и поставить статичный id: 3
            let postItem = {
                id: idNumberAdd,
                avatar: state.ownInformation.avatar,
                name: `${state.ownInformation.name} сообщение №${state.postData[1].id++}`, //просто смотрю какое сообщение выводится по количеству можно просто оставить state.ownInformation.name
                postText: state.postTextarea
            }
            state.postData.push(postItem);
            state.postData.splice(0, 1);
            state.postTextarea = "";
            return state;
        case CHANGE_POST_TEXTAREA:
            state.postTextarea = action.newPostTextareaLetter;
            return state;
        default: return state;
    }
}


export const addPostAC = () => ({ type: ADD_NEW_POST });
export const onChangePostTextareaAC = (textareaValue) => ({ type: CHANGE_POST_TEXTAREA, newPostTextareaLetter: textareaValue });

export default profilePageReducer;