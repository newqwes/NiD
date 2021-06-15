import { reduxForm, Field } from 'redux-form';

import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { TextareaCostom } from '../../../common/FormsControl/FormsControl';

import s from './Post.module.scss';

const maxLength200 = maxLengthCreator(200);

const PostForm = ({ handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Field
        name='postTextarea'
        component={TextareaCostom}
        placeholder='Что у Вас нового?'
        type='text'
        validate={[required, maxLength200]}
      />
      <button className={s.button}>Отправить</button>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'postProfile' })(PostForm);

const Post = ({ postData, addPost }) => {
  const postDataElements = postData.map(n => (
    <div key={n.id} className={s.itemPost}>
      <div className={s.avatarContainer}>
        <img src={n.avatar} alt='' className={s.avatarImg} />
      </div>
      <div>
        <div className={s.nameUser}>
          {n.name} <div className={s.spanTime}>{n.dateTime}</div>
        </div>
        <div>{n.postText}</div>
      </div>
    </div>
  ));

  const onSubmit = values => {
    addPost(values.postTextarea);
  };

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.form__wrapper}>
          <PostReduxForm onSubmit={onSubmit} />
        </div>
        {postDataElements}
      </div>
    </section>
  );
};

export default Post;
