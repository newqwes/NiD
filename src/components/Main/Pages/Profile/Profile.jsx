import React from 'react'
import s from './Profile.module.scss'
import Post from './Post/Post'

const Profile = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.imgSection}>
                        <div className={s.imgContainer}>
                            <img src="https://qwes.pw/img/photo.jpg" alt=""/>
                        </div>
                        <div className={s.imgButtonContainer}>
                            <button>Редактировать</button>
                            <button>...</button>
                        </div>
                    </div>
                    <div className={s.level}>Назар Аширов</div>
                    <div className={s.catalog}>catalog image</div>
                    <div className={s.post}>
                        <Post />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile;