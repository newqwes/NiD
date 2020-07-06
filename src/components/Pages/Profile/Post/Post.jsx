import React from 'react'
import s from './Post.module.scss'
import { addPostAC, onChangePostTextareaAC } from '../../../../redux/store';

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
    //считываем что находится в texatea и передаем в функцию которая лежит в BLL под названием addNewPost и там она уже записывает все в стейт и обновляет стейт затем он перерисовывается уже с новыми данными
    let textareaValue = React.createRef();

    let onChangePostTextarea = () => {
        props.dispatch(onChangePostTextareaAC(textareaValue.current.value))
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
                        <textarea ref={textareaValue} value={props.state.postTextarea} onChange={onChangePostTextarea} />
                        <button onClick={addPost}>Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;