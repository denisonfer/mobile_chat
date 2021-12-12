import { showMessage } from 'react-native-flash-message';

import { GetState, SetState } from 'zustand';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { IUser } from '#/shared/interfaces/IUser';

import { IAuthInitialStates } from './useAuthStore';

interface IAuthResponseAxios {
  user: IUser;
  token: string;
}

export const authActionsSlice = (
  set: SetState<IAuthInitialStates>,
  get: GetState<IAuthInitialStates>,
) => ({
  signInRequest: async (email: string, password: string) => {
    set(() => ({ loading: true }));
    try {
      const response = await api.post<IAuthResponseAxios>(endpoints.sessions, {
        email,
        password,
      });
      const { user, token } = response.data;
      console.tron.log('user: ', user);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      set(() => ({ loading: false }));
    } catch (error) {
      console.tron.log('error', error);
      set(() => ({ loading: false }));
      showMessage({
        message: `${error.response.data.message}`,
        type: 'danger',
        icon: 'danger',
        floating: true,
        duration: 2000,
      });
    }
  },
  signInSuccess: (token: string) => {
    set(() => ({ token }));
  },
  requestFailure: () => {
    set(() => ({ loading: false }));
  },
});
