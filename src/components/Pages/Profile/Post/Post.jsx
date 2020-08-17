import React from "react";
import s from "./Post.module.scss";
import { reduxForm, Field } from "redux-form";

const Post = (props) => {
  let postDataElements = props.postData.map((n) => (
    <div key={n.id} className={s.itemPost}>
      <div className={s.avatarContainer}>
        <img src={n.avatar} alt="" className={s.avatarImg} />
      </div>
      <div>
        <div className={s.nameUser}>
          {n.name} <div className={s.spanTime}>{n.dateTime}</div>
        </div>
        <div>{n.postText}</div>
      </div>
    </div>
  ));

  let addPost = (values) => {
    props.addPost(values.postTextarea);
  };

  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.form__wrapper}>
          <PostReduxForm onSubmit={addPost} />
        </div>
        {postDataElements}
      </div>
    </section>
  );
};

const PostForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        name="postTextarea"
        component="textarea"
        type="text"
        className={s.textarea}
      />
      <button className={s.button}>Отправить</button>
    </form>
  );
};
const PostReduxForm = reduxForm({ form: "postProfile" })(PostForm);
export default Post;
