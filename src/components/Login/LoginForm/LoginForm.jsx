import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../../common/FormsControls/FromsControls";
import { required } from "../../../util/validator/validators";
import errorStyles from "../../common/FormsControls/FromsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        Remember me
      </div>
      {props.error && (
        <div className={errorStyles.summeryError}>{props.error}</div>
      )}
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
