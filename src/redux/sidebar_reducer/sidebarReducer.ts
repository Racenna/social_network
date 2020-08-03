import { SidebarStateType, SidebarActionTypes } from './types';

const initialState: SidebarStateType = {
  friends: {
    title: 'Friends',
    users: [
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
    ],
  },
};

const sidebarReducer = (state = initialState, action: any) => {
  // TODO: Change Type any
  switch (action.type) {
    default:
      return state;
  }
};

export default sidebarReducer;
