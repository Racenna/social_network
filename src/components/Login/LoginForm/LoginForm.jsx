import React from "react";
import { reduxForm } from "redux-form";
import { Input, CreatField } from "../../common/FormsControls/FromsControls";
import { required } from "../../../util/validator/validators";
import errorStyles from "../../common/FormsControls/FromsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreatField("Email", "email", [required], Input)}
      {CreatField("Password", "password", [required], Input, {
        type: "password",
      })}
      {CreatField(
        null,
        "rememberMe",
        [],
        "input",
        { type: "checkbox" },
        "Remember me"
      )}
      {error && <div className={errorStyles.summeryError}>{error}</div>}
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
