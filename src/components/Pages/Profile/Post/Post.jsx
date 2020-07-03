import React from 'react'
import s from './Post.module.scss'

const Post = (props) => {
    let postData = props.postData;
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