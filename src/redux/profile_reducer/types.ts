// profileReducer.ts
export const ADD_POST = 'profile/ADD_POST';
export const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
export const SET_STATUS = 'profile/SET_STATUS';
export const DELETE_POST = 'profile/DELETE_POST';
export const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

interface PostType {
  id: number;
  message: string;
  likeCount: number;
}

interface ContactsType {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
}

export interface PhotosType {
  small: string | null;
  large: string | null;
}

export interface ProfileType {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
}

// State for profile reducer
export interface ProfileStateType {
  posts: Array<PostType>;
  profile: ProfileType | null;
  // profile: ProfileType | null | object; // without object ts throw error compile
  status: string;
}

// Actions
interface AddPostActionType {
  type: typeof ADD_POST;
  message: string;
}

interface SetUserProfileActionType {
  type: typeof SET_USER_PROFILE;
  payload: ProfileType;
}

interface SetStatusActionType {
  type: typeof SET_STATUS;
  status: string;
}

interface DeletePostActionType {
  type: typeof DELETE_POST;
  postId: number;
}

interface SavePhotoSuccess {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
}

// All actions
export type ProfileActionTypes =
  | AddPostActionType
  | SetUserProfileActionType
  | SetStatusActionType
  | DeletePostActionType
  | SavePhotoSuccess;
