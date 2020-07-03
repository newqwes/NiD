import React from 'react'
import s from './Profile.module.scss'
import Post from './Post/Post'

const Profile = () => {
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                   
                    <div className={s.level}>Назар Аширов</div>
                    <div className={s.catalog}>
                        <img className={s.imgCatalog} src="https://cdn.pixabay.com/photo/2020/03/18/19/08/landscape-4945254_960_720.jpg" alt=""/>
                        <img className={s.imgCatalog} src="https://storge.pic2.me/c/1360x800/506/56274286d6905.jpg" alt=""/>
                        <img className={s.imgCatalog} src="https://poster.nicefon.ru/2016_09/26/1080x610/1582397179b17071f8f9f0.jpg" alt=""/>
                        <img className={s.imgCatalog} src="https://storge.pic2.me/c/1360x800/782/588ef87f91541.jpg" alt=""/>
                    </div>
                    <div className={s.post}>
                        <Post />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile;