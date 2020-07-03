import React from 'react'
import s from './Post.module.scss'

const Post = () => {
    let postData = [
        { id: 0, avatar: "https://qwes.pw/profile/AnnaNails/img/photo.jpg", name: "Аня", postText: "Привет" },
        { id: 1, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png", name: "Майя", postText: "Привет это Майя" },
        { id: 2, avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png", name: "Азим", postText: "Привет братиш!" }
    ];
    let postDataElements = postData.map(n => (
        <div className={s.itemPost}>
            <div className={s.avatarContainer}>
                <img src={n.avatar} alt="" className={s.avatarImg} />
            </div>
            <div>
                <div className={s.nameUser}>{n.name}</div>
                <div>{n.postText}</div>
            </div>
        </div>
    ))
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                {postDataElements}
                <div className={s.form__wrapper}>
                    <div className={s.form}>
                        <textarea name="" id="" cols="40" rows="2"></textarea>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;