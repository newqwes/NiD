import React from 'react'
import { addNewMessageTextAC, dialogOnChangeTextareaAC } from '../../../../redux/dialog-reducer'
import DialogWithPeople from './DialogWithPeople'

const DialogWithPeopleContainer = (props) => {

    let addNewMessageText = id => props.store.dispatch(addNewMessageTextAC(id));
    let dialogOnChangeTextarea = (id, value) => props.store.dispatch(dialogOnChangeTextareaAC(id, value));

    return <DialogWithPeople addNewMessageText={addNewMessageText} dialogOnChangeTextarea={dialogOnChangeTextarea} dialogData={props.dialogData} />
}

export default DialogWithPeopleContainer;