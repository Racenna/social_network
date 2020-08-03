import { DialogsStateType, DialogsActionTypes, SEND_MESSAGE } from './types';

const initialState: DialogsStateType = {
  messages: [
    { id: 1, message: 'Hello', status: 'Friend' },
    { id: 2, message: 'Hello', status: 'Friend' },
    {
      id: 3,
      message: 'Hello!!!!!!!!!!!!!!!!!!',
      status: 'My',
    },
    { id: 4, message: 'Hello', status: 'Friend' },
    { id: 5, message: 'Hello', status: 'My' },
    { id: 6, message: '...', status: 'My' },
  ],

  dialogs: [
    {
      id: 1,
      name: 'Vlad',
      image:
        'https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg',
    },
    {
      id: 2,
      name: 'Angelina',
      image: 'https://html5css.ru/howto/img_avatar2.png',
    },
    {
      id: 3,
      name: 'Andrei',
      image: 'https://html5css.ru/w3css/img_avatar3.png',
    },
    {
      id: 4,
      name: 'Vadim',
      image:
        'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg',
    },
    {
      id: 5,
      name: 'Vova',
      image:
        'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
    },
  ],
};

const dialogsReducer = (
  state = initialState,
  action: DialogsActionTypes
): DialogsStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: action.message,
            status: 'My', //TODO: owner: user.id
          },
        ],
      };

    default:
      return state;
  }
};

export const sendMessage = (message: string): DialogsActionTypes => ({
  type: SEND_MESSAGE,
  message,
});

export default dialogsReducer;
