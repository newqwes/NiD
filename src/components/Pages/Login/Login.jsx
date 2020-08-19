import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputCostom } from "../../common/FormsControl/FormsControl";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../../redux/auth";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLengthCreator(20);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.remembeMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <h1>Страница авторизации</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={InputCostom}
          validate={[required, maxLength20]}
          name={"email"}
          type="text"
          placeholder={"email"}
        />
      </div>
      <div>
        <Field
          component={InputCostom}
          validate={[required, maxLength20]}
          name={"password"}
          type="password"
          placeholder={"password"}
        />
      </div>
      <div>
        <Field name={"remembeMe"} component={"input"} type={"checkbox"} />
        Remembe me
      </div>
      {props.error && <div>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
