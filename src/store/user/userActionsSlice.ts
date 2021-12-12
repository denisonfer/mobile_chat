import { GetState, SetState } from 'zustand';

import { IUser } from '#/shared/interfaces/IUser';

import { UserStates } from './useUserStore';

export const userActionsSlice = (
  set: SetState<UserStates>,
  get: GetState<UserStates>,
) => ({
  saveUser: (user: IUser) => {
    set(() => ({ user }));
  },
  requestUpdateUser: () => {
    set(() => ({ loadingUser: true }));
  },
  requestFailure: () => {
    set(() => ({ loadingUser: false }));
  },
});
