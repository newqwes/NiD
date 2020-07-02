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
        { name: "Назар", avatar: "https://qwes.pw/img/photo.jpg", url: "/Dialogs/Nazar" }
    ];
    return (
        <section className={s.section}>
            <div className={s.dialogsPeople}>
                <DialogsPeople namePerson={dialogData[0].name} urlAvatarDialog={dialogData[0].avatar} urlDialog={dialogData[0].url} />
                <DialogsPeople namePerson={dialogData[1].name} urlAvatarDialog={dialogData[1].avatar} urlDialog={dialogData[1].url} />
                <DialogsPeople namePerson={dialogData[2].name} urlAvatarDialog={dialogData[2].avatar} urlDialog={dialogData[2].url} />
                <DialogsPeople namePerson={dialogData[3].name} urlAvatarDialog={dialogData[3].avatar} urlDialog={dialogData[3].url} />
                <DialogsPeople namePerson={dialogData[4].name} urlAvatarDialog={dialogData[4].avatar} urlDialog={dialogData[4].url} />
            </div>
            <div className={s.dialogWithPeople}>
                <DialogWithPeople />
            </div>
        </section>
    )
}

export default Dialogs;