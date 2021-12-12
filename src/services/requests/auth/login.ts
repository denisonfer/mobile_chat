import { showMessage } from 'react-native-flash-message';

import { AxiosResponse } from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { IUser } from '#/shared/interfaces/IUser';

interface ILoginDTO {
  email: string;
  password: string;
}

export interface IResponseSignIn {
  user: IUser;
  token: string;
}

export async function login({
  email,
  password,
}: ILoginDTO): Promise<IResponseSignIn> {
  try {
    const response: AxiosResponse<IResponseSignIn> = await api.post(
      endpoints.sessions,
      {
        email,
        password,
      },
    );

    const { user, token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    return { user, token };
  } catch (error) {
    console.tron.log('error', error);
    showMessage({
      message: `${error.response.data.message}`,
      type: 'danger',
      icon: 'danger',
      floating: true,
      duration: 2000,
    });

    throw new Error('Erro ao realizar signIn');
  }
}
