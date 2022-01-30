import { showMessage } from 'react-native-flash-message';

import axios from 'axios';

import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { IGroup } from '#/shared/interfaces/IGroup';

export interface IGroupsData extends IGroup {
  status_group_title: string;
}

export async function loadGroupsRequest(): Promise<IGroupsData[] | undefined> {
  try {
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
