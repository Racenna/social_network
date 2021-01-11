import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import styles from './../ProfileInfo.module.css';
import { profileDescriptionValidate } from '../../../../util/validator/validators';
const ProfileDescriptionForm = ({ handleSubmit, profile }) => {
  return (
    <Formik
      initialValues={{
        ...profile,
        contacts: { ...profile.contacts },
      }}
      validate={profileDescriptionValidate}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <div className={styles.user_description}>
              <div>
                <button className={styles.edit_button} type='submit'>
                  Save
                </button>
              </div>
              <div>
                <label htmlFor='fullName'>Full name:</label>
                <Field
                  className={styles.text_input}
                  name='fullName'
                  type='text'
                />
                <ErrorMessage name='fullName' component='div' />
              </div>
              <div>
                <label htmlFor='aboutMe'>About Me:</label>
                <Field
                  className={styles.text_input}
                  name='aboutMe'
                  type='text'
                />
                <ErrorMessage name='aboutMe' component='div' />
              </div>
              <div>
                <label htmlFor='lookingForAJob'>Looking for a job:</label>
                <Field name='lookingForAJob' type='checkbox' />
              </div>
              <div>
                <label htmlFor='lookingForAJobDescription'>
                  My professional skills:
                </label>
                <Field
                  className={styles.text_input}
                  name='lookingForAJobDescription'
                  type='text'
                />
                <ErrorMessage
                  name='lookingForAJobDescription'
                  component='div'
                />
              </div>
              <div className={styles.edit_contacts}>
                <span>Contacts:</span>
                {Object.keys(values.contacts).map((key) => {
                  return (
                    <div key={key}>
                      <label htmlFor={`contacts.${key}`}>{key}:</label>
                      <Field
                        className={styles.text_input}
                        name={`contacts.${key}`}
                        type='text'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileDescriptionForm;
