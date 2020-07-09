const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const STATE_DIALOG_ON_CHANGE_TEXTAREA = "STATE-DIALOG-ON-CHANGE-TEXTAREA";

let initialState = {

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
}
const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            {
                let stateCopy = { ...state };
                stateCopy.dialogData = [...state.dialogData];
                stateCopy.dialogData[action.idDialog].message = { ...state.dialogData[action.idDialog].message };
                stateCopy.dialogData[action.idDialog].message.textOwn = [...state.dialogData[action.idDialog].message.textOwn];

                stateCopy.dialogData[action.idDialog].message.textOwn.push(" " + stateCopy.dialogData[action.idDialog].dialogTextarea);
                stateCopy.dialogData[action.idDialog].dialogTextarea = ""; //заменяем предыдущее сообщение на новое которое ввели и так делаем всегда
                return stateCopy;
            }

        case STATE_DIALOG_ON_CHANGE_TEXTAREA:
            {
                let stateCopy = {...state}
                stateCopy.dialogData = [...state.dialogData];

                stateCopy.dialogData[action.idDialog].dialogTextarea = action.newDialogTextareaLetter;
                return stateCopy;
            }
        default:
            return state;
    }
}

export const addNewMessageTextAC = id => ({ type: ADD_NEW_MESSAGE, idDialog: id });
export const dialogOnChangeTextareaAC = (id, newLetterTextarea) =>
    ({ type: STATE_DIALOG_ON_CHANGE_TEXTAREA, idDialog: id, newDialogTextareaLetter: newLetterTextarea })
export default dialogPageReducer;