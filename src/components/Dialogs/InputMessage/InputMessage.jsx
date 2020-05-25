import React from "react";
import styles from "./InputMessage.module.css";
import send from "./../../../svg/send.svg";
import {
  sendMessageActionCreator,
  inputMessageActionCreator,
} from "../../../redux/dialogsReducer";

const InputMessage = (props) => {
  const clickHandler = () => {
    props.dispatch(sendMessageActionCreator());
  };

  const changeHandler = (e) => {
    const text = e.target.value;
    props.dispatch(inputMessageActionCreator(text));
  };

  return (
    <div className={styles.input_massage}>
      <textarea
        value={props.messageText}
        onChange={changeHandler}
        placeholder="Type text"
      />
      <button onClick={clickHandler}>
        <img src={send} alt="send svg" />
      </button>
    </div>
  );
};

export default InputMessage;
