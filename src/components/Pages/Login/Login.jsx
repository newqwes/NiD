import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputCostom } from "../../common/FormsControl/FormsControl";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../../redux/auth";
import { Redirect } from "react-router-dom";
import s from "./Login.module.scss";

const maxLength20 = maxLengthCreator(20);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.remembeMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={s.login__wrapper}>
      <h1>Страница авторизации</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.login__form}>
      <div className={s.form__inputText}>
        <Field component={InputCostom} validate={[required, maxLength20]} name={"email"} type="text" placeholder={"email"} />
      </div>
      <div className={s.form__inputText}>
        <Field
          component={InputCostom}
          validate={[required, maxLength20]}
          name={"password"}
          type="password"
          placeholder={"password"}
        />
      </div>
      <div className={s.form__inputCheckBox}>
        <Field name={"remembeMe"} component={"input"} type={"checkbox"} />
        Remembe me
      </div>
      {props.error && <div>{props.error}</div>}
      <div>
        <button className={s.form__subbmit}>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
