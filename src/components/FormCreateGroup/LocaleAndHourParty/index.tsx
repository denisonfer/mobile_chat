import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as yup from 'yup';

import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import PtBr from 'date-fns/locale/pt-BR';

import Input from '#/components/Input';
import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import {
  Container,
  Title,
  RowButtons,
  ButtonNavigate,
  ButtonTimePicker,
  Scroll,
} from './styles';

interface IProps {
  nextStep: () => void;
  previousStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface IFormData {
  locale: string;
}

const schema = yup.object().shape({
  locale: yup.string().required('Local da festa obrigatório!'),
});

export const LocaleAndHourParty = ({
  nextStep,
  previousStep,
  setCurrentPage,
}: IProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { saveForm, formData } = useFormNewGroupStore();

  const [hour, setHour] = useState(new Date());
  const [showPickerTime, setShowPickerTime] = useState(false);
  const [hourSelected, setHourSelected] = useState(false);

  const onChangeHour = useCallback(
    (_, selectedHour) => {
      const currentDate = selectedHour || hour;
      setShowPickerTime(Platform.OS === 'ios');
      setHour(currentDate);
      setHourSelected(true);
    },
    [hour],
  );

  const handleValidFields = useCallback(
    (form: IFormData) => {
      const { name, valueMin, date_raffle, date_party } = formData;

      const dataForm = {
        name,
        valueMin,
        date_raffle,
        date_party,
        hour_party: hour,
        locale_party: form.locale,
      };

      saveForm(dataForm);

      nextStep();
      setCurrentPage(4);
    },
    [hour],
  );

  return (
    <Scroll>
      <Container>
        <Title>Local & Hora da festa</Title>

        <Input
          bgWhite
          name="locale"
          icon="location"
          placeholder="Local da festa"
          control={control}
          error={errors.locale && errors.locale.message}
        />

        {Platform.OS === 'android' && (
          <>
            <ButtonTimePicker
              isOutline
              title={
                hourSelected
                  ? format(hour, 'HH:mm', { locale: PtBr })
                  : 'Selecionar Hora'
              }
              onPress={() => setShowPickerTime(true)}
            />

            {showPickerTime && (
              <DateTimePicker
                value={hour}
                mode="time"
                is24Hour
                display="spinner"
                onChange={onChangeHour}
              />
            )}
          </>
        )}

        {Platform.OS === 'ios' && (
          <DateTimePicker
            value={hour}
            mode="time"
            is24Hour
            display="spinner"
            onChange={onChangeHour}
          />
        )}

        <RowButtons>
          <ButtonNavigate
            title="Voltar"
            onPress={() => {
              previousStep();
              setCurrentPage(2);
            }}
          />
          <ButtonNavigate
            title="Próximo"
            onPress={handleSubmit(handleValidFields)}
          />
        </RowButtons>
      </Container>
    </Scroll>
  );
};
