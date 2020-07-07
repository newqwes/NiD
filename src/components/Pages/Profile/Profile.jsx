import React from 'react'
import s from './Profile.module.scss'
import PostContainer from './Post/PostContainer';

const Profile = (props) => {
    let galaryPhotosData = props.store.getState().profilePage.galaryPhotosData;
    let galaryPhotosDataElements = galaryPhotosData.map(n => <img className={s.imgCatalog} src={n.urlGalaryPhoto} alt="" />)
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.level}>Назар Аширов</div>
                    <div className={s.catalog}>
                        {galaryPhotosDataElements}
                    </div>
                    <div className={s.post}>
                        <PostContainer store={props.store}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile;