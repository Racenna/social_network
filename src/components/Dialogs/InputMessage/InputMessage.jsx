import React from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../redux/dialogsReducer';
import InputMessageForm from './InputMessageForm/InputMessageForm';

const InputMessage = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.message === undefined || data.message.trim() === '') return;
    dispatch(sendMessage(data.message.trim()));
    data.message = '';
  };

  return <InputMessageForm onSubmit={onSubmit} />;
};

export default InputMessage;
