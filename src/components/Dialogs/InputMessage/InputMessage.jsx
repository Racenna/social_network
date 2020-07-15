import React from "react";
import InputMessageReduxForm from "./InputMessageForm/InputMessageForm";

const InputMessage = (props) => {
  const onSubmit = (data) => {
    if (data.message === undefined || data.message.trim() === "") return;
    props.sendMessage(data.message.trim());
  };

  return <InputMessageReduxForm onSubmit={onSubmit} />;
};

export default InputMessage;
