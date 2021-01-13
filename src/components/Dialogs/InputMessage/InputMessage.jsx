import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../redux/dialogsReducer';
import InputMessageForm from './InputMessageForm/InputMessageForm';

const InputMessage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { message } = values;
    dispatch(sendMessage(message));
  };

  return <InputMessageForm handleSubmit={handleSubmit} />;
};

export default InputMessage;
