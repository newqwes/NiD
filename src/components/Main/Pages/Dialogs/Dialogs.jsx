import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'

const Dialogs = () => {
    return (
        <section className={s.section}>
            <div className={s.dialogsPeople}>
                <DialogsPeople namePerson="Аня" urlDialog="/Dialogs/Anna"/>
                <DialogsPeople namePerson="Майя" urlDialog="/Dialogs/Maya"/>
                <DialogsPeople namePerson="Азим" urlDialog="/Dialogs/Azim"/>
                <DialogsPeople namePerson="Бабуля" urlDialog="/Dialogs/Grandmather"/>
            </div>
            <div className={s.dialogWithPeople}>
                <DialogWithPeople />
            </div>
        </section>
    )
}

export default Dialogs;