import React from 'react'
import s from './Post.module.scss'

const Post = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.itemPost}>
                    <div>img</div>
                    <div>
                        <div>name</div>
                        <div>text</div>
                    </div>
                </div>
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