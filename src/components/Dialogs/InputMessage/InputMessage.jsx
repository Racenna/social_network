import React from 'react';
import InputMessageForm from './InputMessageForm/InputMessageForm';

const InputMessage = (props) => {
  const onSubmit = (data) => {
    if (data.message === undefined || data.message.trim() === '') return;
    props.sendMessage(data.message.trim());
    data.message = '';
  };

  return <InputMessageForm onSubmit={onSubmit} />;
};

export default InputMessage;
