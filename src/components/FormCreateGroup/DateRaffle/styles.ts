import { ScrollView } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import Button from '#/components/Button';

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
  margin-bottom: 16px;
`;

export const CalendarContainer = styled.View`
  height: ${RFValue(320)}px;
  align-items: center;
  justify-content: center;
`;

export const RowButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
`;

export const ButtonNavigate = styled(Button)`
  width: ${RFPercentage(20)}px;
`;
