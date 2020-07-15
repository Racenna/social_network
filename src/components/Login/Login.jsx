import React from "react";
import styles from "./Login.module.css";
import LoginReduxForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (data) => {
    const { email, password, rememberMe } = data;
    props.login(email, password, rememberMe);
    console.log(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
