import AsyncStorage from '@react-native-async-storage/async-storage';

import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { authActionsSlice } from './requestSignIn';

export type IAuthInitialStates = {
  loading: boolean;
  token: string | null;
  isSigned: boolean;
  signInRequest: (email: string, password: string) => void;
  signInSuccess: (token: string) => void;
  requestFailure: () => void;
};

export const useAuthStore = create<IAuthInitialStates>(
  persist(
    (set, get) => ({
      //* INITIAL STATES
      loading: false,
      token: null,
      isSigned: false,

      //* ACTIONS
      ...authActionsSlice(set, get),
    }),
    { name: '@authState', getStorage: () => AsyncStorage },
  ),
);
