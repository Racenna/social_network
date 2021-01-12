import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './../ProfileInfo.module.css';

const descriptionSchemaValidate = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Must be 3 character or more')
    .max(50, 'Must be 50 character or less')
    .required('Required')
    .trim(),
  aboutMe: Yup.string()
    .min(3, 'Must be 3 character or more')
    .max(50, 'Must be 50 character or less'),
  lookingForAJobDescription: Yup.string()
    .required('Required')
    .min(3, 'Must be 3 character or more')
    .max(100, 'Must be 100 character or less'),
  contacts: Yup.object({
    facebook: Yup.string().matches(
      /^https:\/\/(www|m).facebook.com\/(.*)$/gm,
      'Incorrect facebook link'
    ),
    website: Yup.string().matches(
      /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)$/gi,
      'Incorrect website link'
    ),
    vk: Yup.string().matches(/^https:\/\/vk.com\/(.*)$/gm, 'Incorrect vk link'),
    twitter: Yup.string().matches(
      /^https:\/\/twitter.com\/(.*)$/gm,
      'Incorrect twitter link'
    ),
    instagram: Yup.string().matches(
      /^https:\/\/www.instagram.com\/(.*)$/gm,
      'Incorrect instagram link'
    ),
    youtube: Yup.string().matches(
      /^https:\/\/www.youtube.com\/(.*)$/gm,
      'Incorrect youtube link'
    ),
    github: Yup.string().matches(
      /^https:\/\/github.com\/(.*)$/gm,
      'Incorrect github link'
    ),
    mainLink: Yup.string().matches(
      /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)$/gi,
      'Incorrect mainLink link'
    ),
  }),
});

const ProfileDescriptionForm = ({ handleSubmit, profile }) => {
  const formik = useFormik({
    initialValues: {
      ...profile,
      contacts: { ...profile.contacts },
    },
    validationSchema: descriptionSchemaValidate,
    onSubmit: (values, {}) => {
      handleSubmit(values);
    },
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.user_description}>
        <div>
          <button className={styles.edit_button} type='submit'>
            Save
          </button>
        </div>
        <div>
          <label htmlFor='fullName'>Full name:</label>
          <input
            className={styles.text_input}
            id='fullName'
            name='fullName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.errors.fullName ? (
            <div className={styles.error_message}>{formik.errors.fullName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='aboutMe'>About Me:</label>
          <input
            className={styles.text_input}
            id='aboutMe'
            name='aboutMe'
            type='text'
            onChange={formik.handleChange}
            checked={formik.values.aboutMe}
            value={formik.values.aboutMe}
          />
          {formik.errors.aboutMe ? (
            <div className={styles.error_message}>{formik.errors.aboutMe}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='lookingForAJob'>Looking for a job:</label>
          <input
            id='lookingForAJob'
            name='lookingForAJob'
            type='checkbox'
            onChange={formik.handleChange}
            checked={formik.values.lookingForAJob}
          />
        </div>
        <div>
          <label htmlFor='lookingForAJobDescription'>
            My professional skills:
          </label>
          <input
            className={styles.text_input}
            id='lookingForAJobDescription'
            name='lookingForAJobDescription'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lookingForAJobDescription}
          />
          {formik.errors.lookingForAJobDescription ? (
            <div className={styles.error_message}>
              {formik.errors.lookingForAJobDescription}
            </div>
          ) : null}
        </div>
        <div className={styles.edit_contacts}>
          <span>Contacts:</span>
          {Object.keys(formik.values.contacts).map((key) => {
            return (
              <>
                <div key={key}>
                  <label htmlFor={`contacts.${key}`}>{key}:</label>
                  <input
                    className={styles.text_input}
                    id={`contacts.${key}`}
                    name={`contacts.${key}`}
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.contacts[key]}
                  />
                </div>
                {formik.errors.contacts && formik.errors.contacts[key] ? (
                  <div className={styles.error_message}>
                    {formik.errors.contacts[key]}
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default ProfileDescriptionForm;
