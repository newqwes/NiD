import React from 'react'
import s from './Post.module.scss'

const Post = (props) => {

    let postDataElements = props.postData.map(n => (
        <div className={s.itemPost}>
            <div className={s.avatarContainer}>
                <img src={n.avatar} alt="" className={s.avatarImg} />
            </div>
            <div>
                <div className={s.nameUser}>{n.name} <div className={s.spanTime}>{n.dateTime}</div></div>
                <div>{n.postText}</div>
            </div>
        </div>
    ))

    let onChangePostTextarea = (e) => {
        props.onChangePostTextarea(e.target.value)
    }
    let addPost = () => {
        props.addPost()
    }

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.form__wrapper}>
                    <div className={s.form}>
                        <textarea value={props.postTextarea} onChange={onChangePostTextarea} />
                        <button onClick={addPost}>Отправить</button>
                    </div>
                </div>
                {postDataElements}
            </div>
        </section>
    )
}

export default Post;