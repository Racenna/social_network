interface UserType {
  id: number;
  name: string;
  image: string;
}

interface FriendsType {
  title: string;
  users: Array<UserType>;
}

export interface SidebarStateType {
  friends: FriendsType;
}

// payloads

// actions

// all actions
export type SidebarActionTypes = {};
