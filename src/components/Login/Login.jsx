import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { captchaUrlSelector } from '../../selectors/loginSelectors';
import { login } from '../../redux/authReducer';
import { AuthContext } from '../../App';
import LoginForm from './LoginForm/LoginForm';
// import styles from "./Login.module.css";

const Login = () => {
  const isAuth = useContext(AuthContext);
  const captchaUrl = useSelector(captchaUrlSelector);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password, rememberMe, captcha } = data;
    dispatch(login(email, password, rememberMe, captcha));
  };

  if (isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
