const SEND_MESSAGE = "SEND-MESSAGE";
const INPUT_MESSAGE = "INPUT-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        message: state.messageText,
        status: "My",
      };
      state.messages.push(newMessage);
      state.messageText = "";
      return state;

    case INPUT_MESSAGE:
      state.messageText = action.message;
      return state;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const inputMessageActionCreator = (text) => ({
  type: INPUT_MESSAGE,
  message: text,
});

export default dialogsReducer;
