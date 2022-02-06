import { showMessage } from 'react-native-flash-message';

import axios from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { IGift } from '#/shared/interfaces/IGift';

export async function LoadGiftsListRequest(): Promise<IGift | undefined> {
  try {
    const { data } = await api.get<IGift>(endpoints.loadGiftsList);

    return data;
  } catch (error) {
    console.tron.log('[SAVE GIFTS LIST REQUEST ERROR]::', error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return;
      }
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
