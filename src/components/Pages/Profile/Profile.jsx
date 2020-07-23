import React from 'react'
import s from './Profile.module.scss'
import Post from './Post/Post';
import Preloader from '../../common/Preloader/Preloader';
import photoUser from '../../../assets/images/hipster.svg';
import Status from './Status';

const Profile = (props) => {
    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <div className={s.row}>
                    <div className={s.userProfileWrapper}>
                        <div className={s.photoWrapper}>
                            <img src={props.userProfile.photos.large ? props.userProfile.photos.large : photoUser} alt="" />
                        </div>
                        <div className={s.aboutWrapper}>
                            <div className={s.aboutWrapper__userName}>{props.userProfile.fullName}</div>
                            <div className={s.aboutWrapper__description}><span className={s.span}>Обо мне: </span>{props.userProfile.aboutMe}</div>
                            <div className={s.aboutWrapper__description}><span className={s.span}>Статус: </span>
                                <Status status={props.status} updateUserStatus={props.updateUserStatus} />
                            </div>
                        </div>
                        <div className={s.isLookJobWrapper}>
                            <div className={s.isLookJobWrapper__bool}><span className={s.span}>Ищу работу: </span>{props.userProfile.lookingForAJob ? 'Да' : 'Нет'}</div>
                            <div className={s.isLookJobWrapper__description}><span className={s.span}>Описания поиска работы: </span>{props.userProfile.lookingForAJobDescription}</div>
                        </div>
                        <div className={s.contactWrapper}>
                            <div>{props.userProfile.contacts.github}</div>
                            <div>{props.userProfile.contacts.vk}</div>
                            <div>{props.userProfile.contacts.facebook}</div>
                            <div>{props.userProfile.contacts.instagram}</div>
                            <div>{props.userProfile.contacts.twitter}</div>
                            <div>{props.userProfile.contacts.website}</div>
                            <div>{props.userProfile.contacts.youtube}</div>
                            <div>{props.userProfile.contacts.mainLink}</div>
                        </div>
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