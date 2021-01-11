import React from 'react';
import styles from './MyPostsForm.module.css';
import send from './../../../../assets/svg/send.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { postFormValidate } from '../../../../util/validator/validators';

const MyPostsForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        post: '',
      }}
      validate={postFormValidate}
      onSubmit={(values, { resetForm }) => {
        if (values.post.length === 0 || values.post.trim() === '') return;
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div className={styles.input_post}>
          <Field
            className={styles.input_field}
            name='post'
            type='textarea'
            placeholder='type text'
          />
          <button type='submit'>
            <img src={send} alt='Send' />
          </button>
        </div>
        <ErrorMessage
          className={styles.error_message}
          name='post'
          component='div'
        />
      </Form>
    </Formik>
  );
};
export default MyPostsForm;
