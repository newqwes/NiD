import React from 'react'
import s from './Profile.module.scss'
import Post from './Post/Post'

const Profile = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.img}/>
                <div className={s.level}>level</div>
                <div className={s.catalog}>catalog image</div>
                <Post />
            </div>
        </section>
    )
}

export default Profile;