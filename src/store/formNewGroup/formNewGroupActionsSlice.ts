import { GetState, SetState } from 'zustand';

import { FormNewGroupStates, IFormData } from './useFormNewGroupStore';

export const formNewGroupActionsSlice = (
  set: SetState<FormNewGroupStates>,
  get: GetState<FormNewGroupStates>,
) => ({
  saveForm: (form: IFormData) => {
    const {
      name,
      valueMin,
      date_raffle,
      date_party,
      hour_party,
      locale_party,
    } = form;
    const formData = {
      name,
      valueMin,
      date_raffle,
      date_party,
      hour_party,
      locale_party,
    };

    set(() => ({ formData }));
  },
});
