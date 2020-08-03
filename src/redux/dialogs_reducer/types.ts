export const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

export interface MessageType {
  id: number;
  message: string;
  status: string;
}

export interface DialogType {
  id: number;
  name: string;
  image: string;
}

export interface DialogsStateType {
  messages: Array<MessageType>;
  dialogs: Array<DialogType>;
}

// payloads

// actions
interface SendMessageActionType {
  type: typeof SEND_MESSAGE;
  message: string;
}
// all actions
export type DialogsActionTypes = SendMessageActionType;
