import React from "react";
import styles from "./InputMessage.module.css";
import send from "./../../../assets/svg/send.svg";

const InputMessage = (props) => {
  const clickHandler = () => {
    if (props.messageText === "") return;
    props.sendMessage();
  };

  const changeHandler = (e) => {
    const text = e.target.value;
    props.inputMessage(text);
  };

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clickHandler();
    }
  };

  return (
    <div className={styles.input_massage}>
      <textarea
        value={props.messageText}
        onChange={changeHandler}
        onKeyDown={onEnterPress}
        placeholder="Type text"
      />
      <button onClick={clickHandler}>
        <img src={send} alt="send svg" />
      </button>
    </div>
  );
};

export default InputMessage;
