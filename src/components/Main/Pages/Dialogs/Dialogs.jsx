import React from 'react'
import s from './Dialogs.module.scss'
import DialogsPeople from './DialogsPeople/DialogsPeople'
import DialogWithPeople from './DialogWithPeople/DialogWithPeople'

const Dialogs = () => {
    const dialogData = [
        { name: "Аня", avatar: "https://qwes.pw/profile/AnnaNails/img/photo.jpg", url: "/Dialogs/Anna" },
        { name: "Майя", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", url: "/Dialogs/Maya" },
        { name: "Азим", avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", url: "/Dialogs/Azim" },
        { name: "Бабуля", avatar: "https://img.favpng.com/10/23/1/computer-icons-user-profile-avatar-png-favpng-ypy9BWih5X28x0zDEBeemwyx8.jpg", url: "/Dialogs/Grandmather" },
        { name: "Назар", avatar: "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png", url: "/Dialogs/Nazar" }
    ];
    let dialogDataElement = dialogData.map(n => <DialogsPeople namePerson={n.name} urlAvatarDialog={n.avatar} urlDialog={n.url} />)
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