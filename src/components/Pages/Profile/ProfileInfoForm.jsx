import React from "react";
import s from "./Profile.module.scss";
import photoUser from "../../../assets/images/hipster.webp";
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
          <span className={s.span}>Изменить имя: </span>
          <Field component={InputCostom} name="fullName" type="text" />
          <span className={s.span}>О себе: </span>
          <Field component={TextareaCostom} name="aboutMe" type="text" />
          <button className={s.aboutWrapper__button}>Сохранить</button>
          {!!props.error && props.error}
        </div>
      </div>
      <div className={s.isLookJobWrapper}>
        <div className={s.isLookJobWrapper__bool}>
          <span className={s.span}>Ищу работу: </span>
          <Field component={InputCostom} name="lookingForAJob" type="checkbox" />
        </div>
        <div className={s.isLookJobWrapper__description}>
          <span className={s.span}>Описания поиска работы: </span>
          <Field component={TextareaCostom} name="lookingForAJobDescription" type="text" />
        </div>
      </div>
      <div className={s.contactWrapper}>
        {Object.keys(props.userProfile.contacts).map((key) => {
          return (
            <div>
              <span className={s.span}>{key}: </span>
              <Field component={InputCostom} name={"contacts." + key} placeholder={key} type="text" />
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileInfoForm = reduxForm({ form: "profile-form" })(InfoForm);

export default ProfileInfoForm;
