// @ts-nocheck

import AsyncStorage from '@react-native-async-storage/async-storage';

import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export type InitialState = {};

export type AuthStates = {
  loading: boolean;
  token: string | null;
  isSigned: boolean;
  requestSignIn: () => void;
  signInSuccess: (token: string) => void;
  requestFailure: () => void;
};

export const useAuthStore = create<AuthStates>(
  persist(
    set => ({
      //* INITIAL STATES
      loading: false,
      token: null,
      isSigned: false,

      //* ACTIONS
      requestSignIn: () =>
        set(
          produce((state: AuthStates) => {
            state.loading = true;
          }),
        ),
      signInSuccess: (token: string) =>
        set(
          produce((state: AuthStates) => {
            state.token = token;
            state.loading = false;
            state.isSigned = true;
          }),
        ),
      requestFailure: () =>
        set(
          produce((state: AuthStates) => {
            state.loading = false;
          }),
        ),
    }),
    {
      name: '@authState',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useAuthStore;
