import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../../common/FormsControls/FromsControls';
import { required } from '../../../util/validator/validators';
import errorStyles from '../../common/FormsControls/FromsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, {
        type: 'password',
      })}
      {createField(
        null,
        'rememberMe',
        [],
        'input',
        { type: 'checkbox' },
        'Remember me'
      )}
      {captchaUrl && <img src={captchaUrl} alt={captchaUrl} />}
      {captchaUrl &&
        createField('Symbols from captcha', 'captcha', [required], Input)}
      {error && <div className={errorStyles.summeryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginReduxForm;
