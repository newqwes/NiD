import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'

const Dialogs = () => {
    return (
        <section className={s.section}>
            <div className={s.dialogsPeople}>
                <DialogsPeople namePerson="Аня" urlAvatarDialog="https://qwes.pw/profile/AnnaNails/img/photo.jpg" urlDialog="/Dialogs/Anna"/>
                <DialogsPeople namePerson="Майя" urlAvatarDialog="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png" urlDialog="/Dialogs/Maya"/>
                <DialogsPeople namePerson="Азим" urlAvatarDialog="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" urlDialog="/Dialogs/Azim"/>
                <DialogsPeople namePerson="Бабуля" urlAvatarDialog="https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg" urlDialog="/Dialogs/Grandmather"/>
                <DialogsPeople urlAvatarDialog="https://qwes.pw/img/photo.jpg" namePerson="Назар" urlDialog="/Dialogs/Nazar"/>
            </div>
            <div className={s.dialogWithPeople}>
                <DialogWithPeople />
            </div>
        </section>
    )
}

export default Dialogs;