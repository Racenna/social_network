import React from "react";
import { reduxForm, Field } from "redux-form";
// import styles from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="Password" name="password" component="input" />
      </div>
      <div>
        <Field
          type="checkbox"
          placeholder="Password"
          name="rememberMe"
          component="input"
        />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
