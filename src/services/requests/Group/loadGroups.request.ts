import { showMessage } from 'react-native-flash-message';

import axios from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { IGroup } from '#/shared/interfaces/IGroup';
import { useAuthStore } from '#/store/auth/useAuthStore';

export interface IGroupsData extends IGroup {
  status_group_title: string;
}

export async function loadGroupsRequest(): Promise<IGroupsData[] | undefined> {
  try {
    const { token } = useAuthStore.getState();
    api.defaults.headers.common = { Authorization: `Bearer ${token}` };

    const { data } = await api.get<IGroupsData[]>(endpoints.loadGroups);

    return data.map(group => ({
      ...group,
      status_group_title:
        group.status_group_id === 1
          ? 'Aguardando sorteio'
          : group.status_group_id === 2
          ? 'Sorteio realizado'
          : 'Evento Realizado',
    }));
  } catch (error) {
    console.tron.log('[LOAD GROUPS REQUEST ERROR]::', error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        useAuthStore.setState({ isSigned: false, token: null });
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
