import React from 'react'
import s from './Profile.module.scss'
import Post from './Post/Post';

const Profile = (props) => {
    let galaryPhotosDataElements = props.galaryPhotosData.map(n => <img className={s.imgCatalog} src={n.urlGalaryPhoto} alt="" />)
    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.level}>Назар Аширов</div>
                    <div className={s.catalog}>
                        {galaryPhotosDataElements}
                    </div>
                    <div className={s.post}>
                        <Post postData={props.postData} onChangePostTextarea={props.onChangePostTextarea} addPost={props.addPost} postTextarea={props.postTextarea} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile;