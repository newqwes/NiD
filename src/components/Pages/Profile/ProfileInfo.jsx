import { Link } from 'react-router-dom';

import photoUser from '../../../assets/images/hipster.webp';
import { Status } from './Status';

import s from './Profile.module.scss';

const ProfileInfo = props => (
  <div className={s.userProfileWrapper}>
    <div className={s.photoWrapper}>
      <img
        src={props.userProfile.photos.large ? props.userProfile.photos.large : photoUser}
        alt={props.userProfile.fullName}
      />
      {props.isYourProfile && (
        <div className={s.photoWrapper__input}>
          <input type='file' name='file' id='file' onChange={props.onChangePhoto} />
          <label htmlFor='file'>Загрузить фото</label>
        </div>
      )}
    </div>
    <div className={s.aboutWrapper}>
      <div className={s.aboutWrapper__title}>
        <div className={s.aboutWrapper__userName}>{props.userProfile.fullName}</div>
        <button className={s.aboutWrapper__button} onClick={() => props.setEditMode(true)}>
          Редактировать
        </button>
      </div>
      <div className={s.aboutWrapper__description}>
        <span className={s.span}>Статус (нажмите что бы изменить): </span>
        <Status status={props.status} updateUserStatus={props.updateUserStatus} />
      </div>
      <span className={s.span}>О себе: </span>
      {props.userProfile.aboutMe}
    </div>
    <div className={s.isLookJobWrapper}>
      <div className={s.isLookJobWrapper__bool}>
        <span className={s.span}>Ищу работу: </span>
        {props.userProfile.lookingForAJob ? 'Да' : 'Нет'}
      </div>
      {!!props.userProfile.lookingForAJob && (
        <div className={s.isLookJobWrapper__description}>
          <span className={s.span}>Описания поиска работы: </span>
          {props.userProfile.lookingForAJobDescription}
        </div>
      )}
    </div>
    <div className={s.contactWrapper}>
      {Object.keys(props.userProfile.contacts).map(key => {
        return (
          <div key={key}>
            <span className={s.span}>{key}: </span>
            <Link to={props.userProfile.contacts[key] || ''} target='_blank'>
              {props.userProfile.contacts[key]}
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default ProfileInfo;
