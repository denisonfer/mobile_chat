import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

import { useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';
import PtBr from 'date-fns/locale/pt-BR';
import { useTheme } from 'styled-components';

import { MyActivityIndicator } from '#/components/MyActivityIndicator';
import { api } from '#/services/api';
import endpoints from '#/shared/endpoints';
import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import {
  ButtonNavigate,
  ColumnResume,
  Container,
  Icon,
  ResumeTitle,
  ResumeValue,
  RowButtons,
  RowResume,
  Scroll,
  Title,
} from './styles';

interface IProps {
  previousStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const ReviewAndCreate = ({ previousStep, setCurrentPage }: IProps) => {
  const { navigate } = useNavigation();
  const { colors } = useTheme();
  const { formData } = useFormNewGroupStore();

  const [loading, setLoading] = useState(false);

  function formatDate(date: Date): string {
    const day = date.getDate() + 1;
    const month = format(date, 'MMMM', { locale: PtBr });
    const year = date.getFullYear();
    const fullDate = `${day} de ${month} de ${year}`;

    return fullDate;
  }

  const handleValidFields = useCallback(async () => {
    try {
      setLoading(true);

      const {
        name,
        valueMin,
        date_raffle,
        date_party,
        hour_party,
        locale_party,
      } = formData;

      await api.post(endpoints.createGroup, {
        name,
        value_min: valueMin,
        date_raffle,
        date_party,
        hour_party,
        locale_party,
      });

      showMessage({
        message: 'Grupo criado com sucesso!',
        type: 'success',
        icon: 'success',
        floating: true,
        duration: 2000,
      });

      setLoading(false);

      navigate('BottomTabsScreens');
    } catch (error) {
      setLoading(false);
      showMessage({
        message: `${error.response.data.message}`,
        type: 'danger',
        icon: 'danger',
        floating: true,
        duration: 2000,
      });
    }
  }, []);

  return (
    <Scroll>
      {loading && <MyActivityIndicator />}

      <Container>
        <Title>Revisar & Criar grupo</Title>

        <RowResume>
          <Icon name="pencil" color={colors.PRIMARY} />
          <ColumnResume>
            <ResumeTitle>Nome do Grupo</ResumeTitle>
            <ResumeValue>{formData.name}</ResumeValue>
          </ColumnResume>
        </RowResume>

        <RowResume>
          <Icon name="cash" color={colors.PRIMARY} />
          <ColumnResume>
            <ResumeTitle>Valor mínimo</ResumeTitle>
            <ResumeValue>
              R${String(formData.valueMin).replace('.', ',')}
            </ResumeValue>
          </ColumnResume>
        </RowResume>

        <RowResume>
          <Icon name="calendar" color={colors.PRIMARY} />
          <ColumnResume>
            <ResumeTitle>Data do sorteio</ResumeTitle>
            <ResumeValue>{formatDate(formData.date_raffle)}</ResumeValue>
          </ColumnResume>
        </RowResume>

        <RowResume>
          <Icon name="calendar-check" color={colors.PRIMARY} />
          <ColumnResume>
            <ResumeTitle>Data da festa</ResumeTitle>
            <ResumeValue>{formatDate(formData.date_party)}</ResumeValue>
          </ColumnResume>
        </RowResume>

        <RowResume>
          <Icon name="map-marker" color={colors.PRIMARY} />
          <ColumnResume>
            <ResumeTitle>Local da festa</ResumeTitle>
            <ResumeValue>{formData.locale_party}</ResumeValue>
          </ColumnResume>

          <RowResume style={{ marginLeft: 10 }}>
            <Icon name="clock" color={colors.PRIMARY} />
            <ColumnResume>
              <ResumeTitle>Hora da festa</ResumeTitle>
              <ResumeValue>{format(formData.hour_party, 'HH:mm')}</ResumeValue>
            </ColumnResume>
          </RowResume>
        </RowResume>

        <RowButtons>
          <ButtonNavigate
            title="Voltar"
            onPress={() => {
              previousStep();
              setCurrentPage(3);
            }}
          />
          <ButtonNavigate title="criar grupo" onPress={handleValidFields} />
        </RowButtons>
      </Container>
    </Scroll>
  );
};
