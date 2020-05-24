import React from "react";
import styles from "./InputMessage.module.css";
import send from "./../../../svg/send.svg";

const InputMessage = (props) => {
  const text = React.createRef();

  const clickHandler = () => {
    props.setMessage();
  };

  const changeHandler = () => {
    props.setTextMessage(text.current.value);
  };

  return (
    <div className={styles.input_massage}>
      <textarea
        value={props.messageText}
        onChange={changeHandler}
        ref={text}
        placeholder="Type text"
      />
      <button onClick={clickHandler}>
        <img src={send} alt="send svg" />
      </button>
    </div>
  );
};

export default InputMessage;
