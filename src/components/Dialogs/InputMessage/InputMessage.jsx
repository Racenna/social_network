import React from "react";
import styles from "./InputMessage.module.css";
import send from "./../../../svg/send.svg";
import {
  sendMessageActionCreator,
  inputMessageActionCreator,
} from "../../../redux/state";

const InputMessage = (props) => {
  const messageText = React.createRef();

  const clickHandler = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const changeHandler = () => {
    const text = messageText.current.value;
    props.dispatch(inputMessageActionCreator(text));
  };

  return (
    <div className={styles.input_massage}>
      <textarea
        value={props.messageText}
        onChange={changeHandler}
        ref={messageText}
        placeholder="Type text"
      />
      <button onClick={clickHandler}>
        <img src={send} alt="send svg" />
      </button>
    </div>
  );
};

export default InputMessage;
