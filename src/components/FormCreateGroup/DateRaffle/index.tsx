import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import {
  DateSelectionCalendar,
  DefaultTheme,
  Theme,
} from 'react-native-easy-calendar';

import { format } from 'date-fns';
import PtBrLocale from 'dayjs/locale/pt-br';
import { useTheme } from 'styled-components';

import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import {
  CalendarContainer,
  ButtonNavigate,
  Container,
  RowButtons,
  Title,
  Scroll,
} from './styles';

interface IProps {
  nextStep: () => void;
  previousStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const DateRaffle = ({
  nextStep,
  previousStep,
  setCurrentPage,
}: IProps) => {
  const { colors, fonts } = useTheme();

  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const { saveForm, formData } = useFormNewGroupStore();

  const handleValidFields = useCallback(() => {
    const { name, valueMin } = formData;

    const dataForm = {
      name,
      valueMin,
      date_raffle: new Date(date),
    };

    saveForm(dataForm);
    nextStep();
    setCurrentPage(2);
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
    <Scroll>
      <Container>
        <Title>Data do sorteio</Title>

        <CalendarContainer>
          <DateSelectionCalendar
            locale={PtBrLocale}
            minDate={format(new Date(), 'yyyy-MM-dd')}
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
              setCurrentPage(0);
            }}
          />
          <ButtonNavigate title="Próximo" onPress={handleValidFields} />
        </RowButtons>
      </Container>
    </Scroll>
  );
};
