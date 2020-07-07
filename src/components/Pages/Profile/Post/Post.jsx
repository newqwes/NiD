import React from 'react'
import s from './Post.module.scss'
import { addPostAC, onChangePostTextareaAC } from '../../../../redux/profile-reducer';

const Post = (props) => {

    let postDataElements = props.state.postData.map(n => (
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

    let onChangePostTextarea = (e) => {
        props.dispatch(onChangePostTextareaAC(e.target.value))
    }
    let addPost = () => {
        props.dispatch(addPostAC())
    }

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                {postDataElements}
                <div className={s.form__wrapper}>
                    <div className={s.form}>
                        <textarea value={props.state.postTextarea} onChange={onChangePostTextarea} />
                        <button onClick={addPost}>Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;