import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../Login.module.css';

const loginSchemaValidate = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  captcha: Yup.string(),
});

const LoginForm = ({ handleSubmit, errorMessage, captchaUrl }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
      captcha: '',
    },
    validationSchema: loginSchemaValidate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          name='email'
          type='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <span className={styles.error_message}>{formik.errors.email}</span>
        )}
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <span className={styles.error_message}>{formik.errors.password}</span>
        )}
      </div>
      <div>
        <label htmlFor='rememberMe'>Remember me: </label>
        <input
          id='rememberMe'
          name='rememberMe'
          type='checkbox'
          onChange={formik.handleChange}
          checked={formik.values.rememberMe}
        />
      </div>
      <div>
        {captchaUrl && (
          <label htmlFor='captcha'>
            <img src={captchaUrl} alt={captchaUrl} />
          </label>
        )}
      </div>
      {captchaUrl && (
        <input
          id='captcha'
          name='captcha'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.captcha}
        />
      )}
      <div>
        <button type='submit'>Login</button>
      </div>
      <div>
        {errorMessage && (
          <span className={styles.error_message}>{errorMessage}</span>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
