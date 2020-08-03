export const SET_INITIALIZED = 'app/SET_INITIALIZED';

export interface AppStateType {
  initialized: boolean;
}

// Actions

interface SetInitializedActionType {
  type: typeof SET_INITIALIZED;
}

// All Actions

export type AppActionTypes = SetInitializedActionType;
