import React from 'react';
import styles from './MyPostsForm.module.css';
import send from './../../../../assets/svg/send.svg';
import { maxLengthCreator } from './../../../../util/validator/validators';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FromsControls';

const maxLength100 = maxLengthCreator(100);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.input_post}>
      <Field
        className={styles.input_field}
        component={Textarea}
        name='post'
        placeholder='Type text'
        validate={[maxLength100]}
      />

      <button>
        <img src={send} alt='send svg' />
      </button>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({
  form: 'post',
})(MyPostsForm);

export default MyPostsReduxForm;
