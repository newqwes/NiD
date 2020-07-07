const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const STATE_DIALOG_ON_CHANGE_TEXTAREA = "STATE-DIALOG-ON-CHANGE-TEXTAREA";

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.dialogData[action.idDialog].message.textOwn.push(" " + state.dialogData[action.idDialog].dialogTextarea);
            state.dialogData[action.idDialog].dialogTextarea = ""; //заменяем предыдущее сообщение на новое которое ввели и так делаем всегда
            return state;
        case STATE_DIALOG_ON_CHANGE_TEXTAREA:
            state.dialogData[action.idDialog].dialogTextarea = action.newDialogTextareaLetter;
            return state;
        default:
            return state;
    }
}

export const addNewMessageTextAC = id => ({ type: ADD_NEW_MESSAGE, idDialog: id });
export const dialogOnChangeTextareaAC = (id, newLetterTextarea) =>
    ({ type: STATE_DIALOG_ON_CHANGE_TEXTAREA, idDialog: id, newDialogTextareaLetter: newLetterTextarea })
export default dialogPageReducer;