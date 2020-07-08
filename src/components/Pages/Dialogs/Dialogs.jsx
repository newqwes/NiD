import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import { Route } from 'react-router-dom'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'

const Dialogs = (props) => {

    let dialogDataElement = props.dialogData.map(n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />);

    let messageDataElement = props.dialogData.map(n => <Route path={n.url} render={() => <DialogWithPeople addNewMessageText={props.addNewMessageText} dialogOnChangeTextarea={props.dialogOnChangeTextarea}  dialogData={n} />} />)
    return (
        <section className={s.section}>
            <div className={s.dialogsPeople}>
                {dialogDataElement}
            </div>
            {messageDataElement}

        </section>
    )
}

export default Dialogs;