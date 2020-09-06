import React from "react";
import s from "./Profile.module.scss";
import photoUser from "../../../assets/images/hipster.webp";
import { Status } from "./Status";

const ProfileInfo = (props) => {
  return (
    <div className={s.userProfileWrapper}>
      <div className={s.photoWrapper}>
        <img src={props.userProfile.photos.large ? props.userProfile.photos.large : photoUser} alt={props.userProfile.fullName} />
        {props.isYourProfile && (
          <div className={s.photoWrapper__input}>
            <input type="file" name="file" id="file" onChange={props.onChangePhoto} />
            <label for="file">Загрузить фото</label>
          </div>
        )}
      </div>
      <div className={s.aboutWrapper}>
        <div className={s.aboutWrapper__title}>
          <div className={s.aboutWrapper__userName}>{props.userProfile.fullName}</div>
          <button className={s.aboutWrapper__title} onClick={() => props.setEditMode(true)}>
            Редактировать
          </button>
        </div>

        <div className={s.aboutWrapper__description}>
          <Status status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
      </div>
      <div className={s.isLookJobWrapper}>
        <div className={s.isLookJobWrapper__bool}>
          <span className={s.span}>Ищу работу: </span>
          {props.userProfile.lookingForAJob ? "Да" : "Нет"}
        </div>
        <div className={s.isLookJobWrapper__description}>
          <span className={s.span}>Описания поиска работы: </span>
          {props.userProfile.lookingForAJobDescription}
        </div>
      </div>
      <div className={s.contactWrapper}>
        {Object.keys(props.userProfile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {props.userProfile.contacts[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
