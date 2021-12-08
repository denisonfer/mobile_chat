import AsyncStorage from '@react-native-async-storage/async-storage';

import produce from 'immer';
import { DefaultTheme } from 'styled-components/native';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import { dark, light } from '#/themes';

type ThemeStore = {
  isDarkTheme: boolean;
  currentTheme: DefaultTheme;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>(
  persist(
    set => ({
      //* INITIAL STATES
      isDarkTheme: false,
      currentTheme: light,

      //* ACTIONS
      toggleTheme: () =>
        set(
          produce((state: ThemeStore) => {
            state.isDarkTheme = !state.isDarkTheme;
            state.currentTheme = state.isDarkTheme ? dark : light;
          }),
        ),
    }),
    {
      name: '@themeState',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useThemeStore;
