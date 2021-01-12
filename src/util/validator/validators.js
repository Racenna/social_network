export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`;
  return undefined;
};

export const profileDescriptionValidate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length < 3) {
    errors.fullName = 'Must be 3 character or more';
  } else if (values.fullName.length > 30) {
    errors.fullName = 'Must be 30 character or less';
  }

  if (values.aboutMe.length > 100) {
    errors.aboutMe = 'Must be 100 character or less';
  }

  if (!values.lookingForAJobDescription) {
    errors.lookingForAJobDescription = 'Required';
  } else if (values.lookingForAJobDescription.length < 3) {
    errors.lookingForAJobDescription = 'Must be 3 character or more';
  } else if (values.lookingForAJobDescription.length > 100) {
    errors.lookingForAJobDescription = 'Must be 100 character or less';
  }

  return errors;
};
