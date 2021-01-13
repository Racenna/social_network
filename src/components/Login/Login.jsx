import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
  captchaUrlSelector,
  errorMessageSelector,
  isAuthSelector,
} from '../../redux/authReducer/index';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
  const isAuth = useSelector(isAuthSelector);
  const captchaUrl = useSelector(captchaUrlSelector);
  const errorMessage = useSelector(errorMessageSelector);

  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    const { email, password, rememberMe, captcha } = data;
    dispatch(login(email, password, rememberMe, captcha));
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        captchaUrl={captchaUrl}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
