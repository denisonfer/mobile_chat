import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import {
  DateSelectionCalendar,
  DefaultTheme,
  Theme,
} from 'react-native-easy-calendar';

import { format, addDays } from 'date-fns';
import PtBrLocale from 'dayjs/locale/pt-br';
// import DateTimePicker from '@react-native-community/datetimepicker';

import { useTheme } from 'styled-components';

import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import {
  CalendarContainer,
  ButtonNavigate,
  Container,
  RowButtons,
  Title,
} from './styles';

interface IProps {
  nextStep: () => void;
  previousStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const DateParty = ({
  nextStep,
  previousStep,
  setCurrentPage,
}: IProps) => {
  const { colors, fonts } = useTheme();
  const { saveForm, formData } = useFormNewGroupStore();

  const year = formData.date_raffle?.getFullYear();
  const month = String(formData.date_raffle?.getMonth() + 1);
  const day = formData.date_raffle?.getDate() + 1;
  const state_date_string = `${year}-${month.padStart(2, '0')}-${day}`;

  const [date, setDate] = useState(state_date_string);

  const handleValidFields = useCallback(() => {
    const { name, valueMin, date_raffle } = formData;

    const dataForm = {
      name,
      valueMin,
      date_raffle,
      date_party: new Date(date),
    };

    saveForm(dataForm);
    nextStep();
    setCurrentPage(3);
  }, [date]);

  const CustomTheme: Theme = {
    ...DefaultTheme,
    calendarContainer: {
      backgroundColor: colors.BACKGROUND,
    },
    titleText: {
      color: colors.PRIMARY,
      fontFamily: fonts.BOLD,
      fontSize: 18,
    },
    normalArrowImage: {
      tintColor: colors.PRIMARY,
    },
    normalDayText: {
      color: colors.TITLE,
    },
    disabledDayText: {
      color: colors.SPAN,
    },
    selectedDayContainer: {
      backgroundColor: colors.PRIMARY,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <Container>
      <Title>Data da festa</Title>

      <CalendarContainer>
        <DateSelectionCalendar
          locale={PtBrLocale}
          minDate={state_date_string}
          selectedDate={date}
          onSelectDate={data => setDate(data)}
          theme={CustomTheme}
        />
      </CalendarContainer>

      <RowButtons>
        <ButtonNavigate
          title="Voltar"
          onPress={() => {
            previousStep();
            setCurrentPage(1);
          }}
        />
        <ButtonNavigate title="Próximo" onPress={handleValidFields} />
      </RowButtons>
    </Container>
  );
};
