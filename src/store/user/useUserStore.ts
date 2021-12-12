import AsyncStorage from '@react-native-async-storage/async-storage';

import create from 'zustand';
import { persist } from 'zustand/middleware';

import { IUser } from '#/shared/interfaces/IUser';

import { userActionsSlice } from './userActionsSlice';

export type UserStates = {
  loadingUser: boolean;
  user: IUser | null;
  saveUser: (user: IUser) => void;
  requestUpdateUser: () => void;
  requestFailure: () => void;
};

export const useUserStore = create<UserStates>(
  persist(
    (set, get) => ({
      //* INITIAL STATES
      loadingUser: false,
      user: null,

      //* ACTIONS
      ...userActionsSlice(set, get),
    }),
    {
      name: '@userState',
      getStorage: () => AsyncStorage,
    },
  ),
);
