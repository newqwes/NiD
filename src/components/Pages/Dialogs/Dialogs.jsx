import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'

const Dialogs = (props) => {
    let dialogDataElement = props.state.dialogData.map(n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />)
    return (
        <section className={s.section}>
            <div className={s.dialogsPeople}>
                {dialogDataElement}
            </div>
            <div className={s.dialogWithPeople}>
                <DialogWithPeople />
            </div>
        </section>
    )
}

export default Dialogs;