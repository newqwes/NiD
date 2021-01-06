import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputCustom } from '../../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { connect } from 'react-redux';
import { setLogin } from '../../../redux/auth/actions';
import { Redirect } from 'react-router-dom';
import s from './Login.module.scss';

const maxLength20 = maxLengthCreator(20);

const Login = ({ setLogin, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    setLogin({
      email: formData.email,
      password: formData.password,
      remembeMe: formData.remembeMe,
      captcha: formData.captcha,
    });
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div className={s.login__wrapper}>
      <h1>Страница авторизации</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={s.login__form}>
      <div className={s.form__inputText}>
        <Field
          component={InputCustom}
          validate={[required, maxLength20]}
          name={'email'}
          type='text'
          placeholder={'Почта'}
        />
      </div>
      <div className={s.form__inputText}>
        <Field
          component={InputCustom}
          validate={[required, maxLength20]}
          name={'password'}
          type='password'
          placeholder={'Пароль'}
        />
      </div>
      <div className={s.form__inputCheckBox}>
        <Field name={'remembeMe'} component={'input'} type={'checkbox'} />
        Запомнить
      </div>
      {error && <div>{error}</div>}

      {captchaUrl && <img src={captchaUrl} alt='captchaUrl' />}

      {captchaUrl && (
        <Field
          component={InputCustom}
          validate={[required, maxLength20]}
          name={'captcha'}
          type='text'
          placeholder={'Введите символы'}
        />
      )}

      <div>
        <button className={s.form__subbmit}>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  setLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
