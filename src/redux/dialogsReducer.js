const SEND_MESSAGE = "SEND-MESSAGE";
const INPUT_MESSAGE = "INPUT-MESSAGE";

const initialState = {
  messages: [
    { id: 1, message: "Hello", status: "Friend" },
    { id: 2, message: "Go LoL", status: "Friend" },
    { id: 3, message: "Go discord", status: "My" },
    { id: 4, message: "Wait pls", status: "Friend" },
    { id: 5, message: "Ok", status: "My" },
  ],

  messageText: "",

  dialogs: [
    {
      id: 1,
      name: "Vlad",
      image:
        "https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg",
    },
    {
      id: 2,
      name: "Angelina",
      image: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 3,
      name: "Andrei",
      image: "https://html5css.ru/w3css/img_avatar3.png",
    },
    {
      id: 4,
      name: "Vadim",
      image:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: 5,
      name: "Vova",
      image:
        "https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messageText: "",
        messages: [
          ...state.messages,
          {
            id: 6,
            message: state.messageText,
            status: "My",
          },
        ],
      };

    case INPUT_MESSAGE:
      return {
        ...state,
        messageText: action.message,
      };

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
