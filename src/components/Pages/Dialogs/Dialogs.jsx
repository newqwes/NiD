import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'
import { Route } from 'react-router-dom'

const Dialogs = (props) => {
    let dialogDataElement = props.state.dialogData.map
        (n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />);

    let messageDataElement = props.state.dialogData.map
        (n => <Route path={n.url} render={() => <DialogWithPeople dispatch={props.dispatch} dialogData={n} />} />)
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