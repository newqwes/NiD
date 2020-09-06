import React from "react";
import s from "./Profile.module.scss";
import Post from "./Post/Post";
import Preloader from "../../common/Preloader/Preloader";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfileInfoForm from "./ProfileInfoForm";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.userProfile) {
    return <Preloader />;
  }
  const onSubmit = (formData) => {
    console.log(formData);
    setEditMode(false);
  };
  const onChangePhoto = (e) => {
    if (e.target.files.length) {
      props.changePhoto(e.target.files[0]);
    }
  };
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.row}>
          {editMode ? (
            <ProfileInfoForm
              onSubmit={onSubmit}
              {...props}
              editMode={editMode}
              setEditMode={setEditMode}
              onChangePhoto={onChangePhoto}
            />
          ) : (
            <ProfileInfo {...props} editMode={editMode} setEditMode={setEditMode} onChangePhoto={onChangePhoto} />
          )}

          <div className={s.post}>
            <Post postData={props.postData} addPost={props.addPost} postTextarea={props.postTextarea} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
