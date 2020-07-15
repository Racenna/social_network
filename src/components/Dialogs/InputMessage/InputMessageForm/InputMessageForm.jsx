import React from "react";
import styles from "./InputMessageForm.module.css";
import send from "./../../../../assets/svg/send.svg";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FromsControls";
import { maxLengthCreator } from "../../../../util/validator/validators";

const maxLength100 = maxLengthCreator(100);

const InputMessageForm = (props) => {
  return (
    <form className={styles.input_massage} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="message"
        placeholder="Type text"
        validate={[maxLength100]}
      />
      <button>
        <img src={send} alt="send svg" />
      </button>
    </form>
  );
};

const InputMessageReduxForm = reduxForm({ form: "dialog" })(InputMessageForm);

export default InputMessageReduxForm;
