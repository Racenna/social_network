import React from 'react';
import styles from './MyPostsForm.module.css';
import send from './../../../../assets/svg/send.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const postSchemaValidate = Yup.object().shape({
  post: Yup.string()
    .min(2, 'Must be 2 character')
    .max(100, 'Must be 100 character or less')
    .required('Required')
    .trim(),
});

const MyPostsForm = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      post: '',
    },
    validationSchema: postSchemaValidate,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.input_post}>
        <input
          className={styles.input_field}
          name='post'
          type='textarea'
          onChange={formik.handleChange}
          value={formik.values.post}
          placeholder='type text'
        />
        <button type='submit'>
          <img src={send} alt='Send' />
        </button>
      </div>
      {formik.errors.post ? (
        <div className={styles.error_message}>{formik.errors.post}</div>
      ) : null}
    </form>
  );
};
export default MyPostsForm;
