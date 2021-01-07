import React from 'react';
import { reduxForm } from 'redux-form';
import {
  createField,
  Input,
  Textarea,
} from '../../../common/FormsControls/FormsControls';
import { required } from '../../../../util/validator/validators';
import styles from './../ProfileInfo.module.css';
import errorStyles from '../../../common/FormsControls/FormsControls.module.css';

const ProfileDescriptionForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.user_description}>
      <div>
        <button onClick={() => {}}>save</button>
      </div>
      {props.error && (
        <div className={errorStyles.summeryError}>{props.error}</div>
      )}
      <span>
        Full name: {createField('Full name', 'fullName', [required], Input)}
      </span>
      <span>About Me: {createField('About me', 'aboutMe', [], Textarea)}</span>
      <span>
        Looking for a job:{' '}
        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </span>
      <span>
        My professional skills:{' '}
        {createField(
          'My professional skills',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </span>
      <div className={styles.contacts}>
        Contacts:{' '}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key}>
              {key}: {createField(key, 'contacts.' + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

// const Contacts = ({ contactKey, contactValue }) => {
//   return (
//     <div>
//       {contactKey}: {contactValue}
//     </div>
//   );
// };

const ProfileDescriptionReduxForm = reduxForm({
  form: 'editProfile',
})(ProfileDescriptionForm);

export default ProfileDescriptionReduxForm;
