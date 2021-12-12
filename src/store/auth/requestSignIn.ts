import { GetState, SetState } from 'zustand';

export interface ISignInRequest {
  signInRequest: (email: string, password: string) => void;
}

export const requestSignIn = (set: SetState, get: GetState) => ({
  signInRequest: async () => {},
});
