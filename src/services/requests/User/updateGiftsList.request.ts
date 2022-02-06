import { showMessage } from 'react-native-flash-message';

import axios from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';

interface IRequestDTO {
  gift_id: string;
  gift_1?: string;
  gift_2?: string;
  gift_3?: string;
}

export async function updateGiftsListRequest({
  gift_id,
  gift_1,
  gift_2,
  gift_3,
}: IRequestDTO): Promise<void> {
  try {
    const { status } = await api.put(
      `${endpoints.updateGiftsList}/${gift_id}`,
      {
        gift_1,
        gift_2,
        gift_3,
      },
    );

    if (status === 200) {
      showMessage({
        message: 'Lista atualizada com sucesso!',
        type: 'success',
        icon: 'success',
        floating: true,
        duration: 2000,
      });
    }
  } catch (error) {
    console.tron.log('[SAVE GIFTS LIST REQUEST ERROR]::', error);
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
