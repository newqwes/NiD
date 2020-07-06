const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const STATE_DIALOG_ON_CHANGE_TEXTAREA = "STATE-DIALOG-ON-CHANGE-TEXTAREA";
const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";


let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 0, avatar: "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png", name: "Аня", postText: "Привет" },
                { id: 1, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", name: "Майя", postText: "Привет это Майя" },
                { id: 2, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", name: "Азим", postText: "Привет братиш!" }
            ],
            galaryPhotosData: [
                { id: 0, urlGalaryPhoto: "https://cdn.pixabay.com/photo/2020/03/18/19/08/landscape-4945254_960_720.jpg" },
                { id: 1, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/506/56274286d6905.jpg" },
                { id: 2, urlGalaryPhoto: "https://poster.nicefon.ru/2016_09/26/1080x610/1582397179b17071f8f9f0.jpg" },
                { id: 3, urlGalaryPhoto: "https://storge.pic2.me/c/1360x800/782/588ef87f91541.jpg" }
            ],
            postTextarea: ""
        },
        dialogPage: {
            dialogData: [
                {
                    id: 0, name: "Аня", dialogTextarea: "", nameOwn: "Назар", avatarOwn: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                    avatar: "https://cdn.iconscout.com/icon/free/png-64/avatar-373-456325.png", url: "/Dialogs/Anna",
                    message: {
                        textEnemy: "Привет, я Аня как дела?", textOwn: ["Нормально, твои как?"]
                    }
                },
                {
                    id: 1, name: "Майя", dialogTextarea: "", nameOwn: "Назар", avatarOwn: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                    avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", url: "/Dialogs/Maya",
                    message: {
                        textEnemy: "Привет, я Майя как дела?", textOwn: ["Привет тетя, нормально, твои как?"]
                    }
                },
                {
                    id: 2, name: "Азим", dialogTextarea: "", nameOwn: "Назар", avatarOwn: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                    avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", url: "/Dialogs/Azim",
                    message: {
                        textEnemy: "Привет, я Азимыч как дела?", textOwn: ["Привет бро, нормально, твои как?"]
                    }
                },
                {
                    id: 3, name: "Бабуля", dialogTextarea: "", nameOwn: "Назар", avatarOwn: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                    avatar: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg", url: "/Dialogs/Grandmather",
                    message: {
                        textEnemy: "Привет, я Катя как дела?", textOwn: ["Привет бабуль, нормально, твои как?"]
                    }
                },
                {
                    id: 4, name: "Назар", dialogTextarea: "", nameOwn: "Назар", avatarOwn: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                    avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png", url: "/Dialogs/Nazar",
                    message: {
                        textEnemy: "Привет, я", textOwn: ["Привет!"]
                    }
                }
            ]
        },
        menuSideBar: {
            menuItemData: [
                { value: "Новости", linkUrl: "/News" },
                { value: "Сообщения", linkUrl: "/Dialogs" },
                { value: "Чат", linkUrl: "/Chat" }
            ]
        }
    },
    _callSubscriber: "",
    subscribe(observer) {
        this._callSubscriber = observer
    },
    setState() {
        return this._state
    },

    dispatch(action) {

        if (action.type === ADD_NEW_POST) {
            let idNumberAdd = this._state.profilePage.postData[2].id + 1 // меняю id по мере их добавления временно можно удалить и поставить статичный id: 3
            let postItem = {
                id: idNumberAdd,
                avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png",
                name: "Назар",
                postText: this._state.profilePage.postTextarea
            }
            this._state.profilePage.postData.push(postItem);
            this._state.profilePage.postData.splice(0, 1);
            this._state.profilePage.postTextarea = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_NEW_MESSAGE) {
            this._state.dialogPage.dialogData[action.idDialog].message.textOwn.push(" " + this._state.dialogPage.dialogData[action.idDialog].dialogTextarea);
            this._state.dialogPage.dialogData[action.idDialog].dialogTextarea = ""; //заменяем предыдущее сообщение на новое которое ввели и так делаем всегда
            this._callSubscriber(this._state) //вызываем перерисовку так как стейт изменился и что бы отобразилось всё нужно снова создать DOM
        }
        else if (action.type === CHANGE_POST_TEXTAREA) {
            this._state.profilePage.postTextarea = action.newPostTextareaLetter;
            this._callSubscriber(this._state);
        }
        else if (action.type === STATE_DIALOG_ON_CHANGE_TEXTAREA) {
            this._state.dialogPage.dialogData[action.idDialog].dialogTextarea = action.newDialogTextareaLetter;
            this._callSubscriber(this._state)
        }
    }

}
export const addNewMessageTextAC = id => ({ type: ADD_NEW_MESSAGE, idDialog: id });
export const addPostAC = () => ({ type: ADD_NEW_POST });
export const onChangePostTextareaAC = (textareaValue) => ({ type: CHANGE_POST_TEXTAREA, newPostTextareaLetter: textareaValue });
export const dialogOnChangeTextareaAC = (id, newLetterTextarea) => ({ type: STATE_DIALOG_ON_CHANGE_TEXTAREA, idDialog: id, newDialogTextareaLetter: newLetterTextarea })
export default store;