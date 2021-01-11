export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`;
  return undefined;
};

export const postFormValidate = (values) => {
  const errors = {};
  if (values.post.length > 100) {
    errors.post = 'Must be 100 character or less';
  }
  return errors;
};
