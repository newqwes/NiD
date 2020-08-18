import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputCostom } from "../../common/FormsControl/FormsControl";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
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
          name={"login"}
          type="text"
          placeholder={"login"}
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default Login;
