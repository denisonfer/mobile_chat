import AsyncStorage from '@react-native-async-storage/async-storage';

import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export type InitialState = {
  loading: boolean;
  token: string | null;
  isSigned: boolean;
};

const initialState: InitialState = {
  loading: false,
  token: null,
  isSigned: false,
};

export const useAuthStore = create(
  persist(
    set => ({
      ...initialState,
    }),
    { name: '@authState', getStorage: () => AsyncStorage },
  ),
);
