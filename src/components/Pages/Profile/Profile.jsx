import React from 'react';
import s from './Profile.module.scss';
import Post from './Post/Post';
import Preloader from '../../common/Preloader';
import { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileInfoForm from './ProfileInfoForm';

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);
  if (!props.userProfile) {
    return <Preloader />;
  }
  const onSubmit = (formData) => {
    props.updateInfo(formData);
    setEditMode(false);
  };
  const onUpdatePhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0]);
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
              setEditMode={setEditMode}
              onUpdatePhoto={onUpdatePhoto}
              initialValues={props.userProfile}
            />
          ) : (
            <ProfileInfo
              {...props}
              editMode={editMode}
              setEditMode={setEditMode}
              onUpdatePhoto={onUpdatePhoto}
            />
          )}

          <div className={s.post}>
            <Post
              postData={props.postData}
              setPost={props.setPost}
              postTextarea={props.postTextarea}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
