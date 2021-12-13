import AsyncStorage from '@react-native-async-storage/async-storage';

import create from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '#/shared/interfaces/IUser';

import { authActionsSlice } from './requestSignIn';

export type AuthStates = {
  loading: boolean;
  token: string | null;
  isSigned: boolean;
  signInRequest: (email: string, password: string) => Promise<IUser>;
  signOut: () => void;
};

export const useAuthStore = create<AuthStates>(
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
