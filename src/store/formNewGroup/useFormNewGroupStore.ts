import AsyncStorage from '@react-native-async-storage/async-storage';

import create from 'zustand';
import { persist } from 'zustand/middleware';

import { formNewGroupActionsSlice } from './formNewGroupActionsSlice';

export interface IFormData {
  name?: string;
  valueMin?: number;
  date_raffle?: Date;
  date_party?: Date;
  hour_party?: Date;
  locale_party?: string;
}

export type FormNewGroupStates = {
  formData: {
    name?: string;
    valueMin?: number;
    date_raffle?: Date;
    date_party?: Date;
    hour_party?: Date;
    locale_party?: string;
  };
  saveForm: (form: IFormData) => void;
};

export const useFormNewGroupStore = create<FormNewGroupStates>(
  persist(
    (set, get) => ({
      //* INITIAL STATES
      formData: {
        name: '',
        valueMin: 0,
        date_raffle: new Date(),
        date_party: new Date(),
        hour_party: new Date(),
        locale_party: '',
      },
      //* ACTIONS
      ...formNewGroupActionsSlice(set, get),
    }),
    {
      name: '@FormNewGroupState',
      getStorage: () => AsyncStorage,
    },
  ),
);
