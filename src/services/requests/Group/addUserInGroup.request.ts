import { showMessage } from 'react-native-flash-message';

import axios from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';

export async function addUserInGroupRequest(
  code_invite: string,
): Promise<void> {
  try {
    const { status } = await api.post(endpoints.addUserInGroup, {
      code_invite: code_invite.toUpperCase(),
    });

    if (status === 201) {
      showMessage({
        message: 'Parabéns você entrou no grupo!',
        type: 'success',
        icon: 'success',
        floating: true,
        duration: 2000,
      });
    }
    console.tron.log('status: ', status);
  } catch (error) {
    console.tron.log('[ADD USER IN GROUP REQUEST ERROR]::', error);
    if (axios.isAxiosError(error)) {
      showMessage({
        message: `${error.response?.data.message}`,
        type: 'danger',
        icon: 'danger',
        floating: true,
        duration: 2000,
      });
    }
  }
}
