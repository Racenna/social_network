import React from "react";
import styles from "./MyPostsForm.module.css";
import send from "./../../../../assets/svg/send.svg";
import { reduxForm, Field } from "redux-form";

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.input_post}>
      <Field component="textarea" name="post" placeholder="Type text" />
      <button>
        <img src={send} alt="send svg" />
      </button>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({
  form: "post",
})(MyPostsForm);

export default MyPostsReduxForm;
