import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import send from './../../../../assets/svg/send.svg';
import styles from './InputMessageForm.module.css';

const messageSchemaValidate = Yup.object().shape({
  message: Yup.string()
    .min(1, 'Must be 1 character or more')
    .max(100, 'Must be 100 character or less')
    .required('Required')
    .trim(),
});

const InputMessageForm = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: messageSchemaValidate,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  return (
    <div>
      <form className={styles.input_message} onSubmit={formik.handleSubmit}>
        <input
          className={styles.input_form}
          name='message'
          type='textarea'
          onChange={formik.handleChange}
          value={formik.values.message}
          placeholder='Type text'
        />
        <button type='submit'>
          <img src={send} alt='Send' />
        </button>
      </form>
      {formik.errors.message ? (
        <div className={styles.error_message}>{formik.errors.message}</div>
      ) : null}
    </div>
  );
};

export default InputMessageForm;
