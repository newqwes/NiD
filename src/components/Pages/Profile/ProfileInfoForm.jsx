import React from "react";
import s from "./Profile.module.scss";
import photoUser from "../../../assets/images/hipster.webp";
import { Status } from "./Status";
import { InputCostom, TextareaCostom } from "../../common/FormsControl/FormsControl";
import { reduxForm, Field } from "redux-form";

const InfoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.userProfileWrapper}>
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
          <Field component={InputCostom} name={"userName"} type="text" placeholder={""} />
          <button className={s.aboutWrapper__title}>Сохранить</button>
        </div>

        <div className={s.aboutWrapper__description}>
          <Status status={props.status} updateUserStatus={props.updateUserStatus} />
        </div>
      </div>
      <div className={s.isLookJobWrapper}>
        <div className={s.isLookJobWrapper__bool}>
          <span className={s.span}>Ищу работу: </span>
          <Field component={InputCostom} name={"lookingForAJob"} type="checkbox" />
          <Field component={TextareaCostom} name={"lookingForAJobDescription"} type="text" placeholder={""} />
        </div>
        <div className={s.isLookJobWrapper__description}>
          <span className={s.span}>Описания поиска работы: </span>
          {props.userProfile.lookingForAJobDescription}
        </div>
      </div>
      <div className={s.contactWrapper}>
        {Object.keys(props.userProfile.contacts).map((key) => {
          return (
            <div>
              {key}: {props.userProfile.contacts[key]}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileInfoForm = reduxForm({ form: "profile-form" })(InfoForm);

export default ProfileInfoForm;
