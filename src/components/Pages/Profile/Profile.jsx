import { useState } from 'react';

import Post from './Post/Post';
import Preloader from '../../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo';
import ProfileInfoForm from './ProfileInfoForm';

import s from './Profile.module.scss';

const Profile = props => {
  const [editMode, setEditMode] = useState(false);

  if (!props.userProfile) {
    return <Preloader />;
  }

  const onSubmit = formData => {
    props.changeInfo(formData).then(() => {
      setEditMode(false);
    });
  };

  const onChangePhoto = e => {
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
              setEditMode={setEditMode}
              onChangePhoto={onChangePhoto}
              initialValues={props.userProfile}
            />
          ) : (
            <ProfileInfo
              {...props}
              editMode={editMode}
              setEditMode={setEditMode}
              onChangePhoto={onChangePhoto}
            />
          )}
          <div className={s.post}>
            <Post
              postData={props.postData}
              addPost={props.addPost}
              postTextarea={props.postTextarea}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
