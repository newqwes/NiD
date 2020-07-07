import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import { Route } from 'react-router-dom'
import DialogWithPeopleContainer from './DialogWithPeople/DialogWithPeopleContainer'

const Dialogs = (props) => {
    let dialogData = props.store.getState().dialogPage.dialogData;

    let dialogDataElement = dialogData.map(n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />);

    let messageDataElement = dialogData.map(n => <Route path={n.url} render={() => <DialogWithPeopleContainer store={props.store} dialogData={n} />} />)
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