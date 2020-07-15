import React from "react";
import styles from "./InputMessageForm.module.css";
import send from "./../../../../assets/svg/send.svg";
import { reduxForm, Field } from "redux-form";

const InputMessageForm = (props) => {
  return (
    <form className={styles.input_massage} onSubmit={props.handleSubmit}>
      <Field component="textarea" name="message" placeholder="Type text" />
      <button>
        <img src={send} alt="send svg" />
      </button>
    </form>
  );
};

const InputMessageReduxForm = reduxForm({ form: "dialog" })(InputMessageForm);

export default InputMessageReduxForm;
