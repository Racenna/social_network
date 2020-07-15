import React from "react";
import styles from "./Login.module.css";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
