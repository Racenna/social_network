const store = {
  _state: {
    dialogsData: {
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
    },
    profileData: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 15 },
        { id: 2, message: "It's my first post", likeCount: 5 },
        { id: 3, message: "Cool! ~(^-^~)", likeCount: 25 },
      ],

      postText: "",
    },
    sidebar: {
      friends: {
        title: "Friends",
        users: [
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
        ],
      },
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // action: {type: "SOME-TYPE", ...properties}
    if (action.type === "SEND-MESSAGE") {
      const newMessage = {
        // id: this._state.dialogsData.messages.length + 1,
        id: 6,
        message: this._state.dialogsData.messageText,
        status: "My",
      };

      this._state.dialogsData.messages.push(newMessage);
      this._state.dialogsData.messageText = "";

      this._callSubscriber(this._state);
    } else if (action.type === "INPUT-MESSAGE") {
      this._state.dialogsData.messageText = action.message;

      this._callSubscriber(this._state);
    } else if (action.type === "ADD-POST") {
      const newPost = {
        // id: this._state.profileData.posts.length + 1,
        id: 6,
        message: this._state.profileData.postText,
        likeCount: 0,
      };

      this._state.profileData.posts.push(newPost);
      this._state.profileData.postText = "";

      this._callSubscriber(this._state);
    } else if (action.type === "INPUT-POST") {
      this._state.profileData.postText = action.message;

      this._callSubscriber(this._state);
    }
  },
};

export default store;
