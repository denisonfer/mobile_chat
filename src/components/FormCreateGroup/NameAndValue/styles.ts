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
  height: ${RFPercentage(70)}px;
  padding: 20px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: 36px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
  margin-bottom: 36px;
`;

export const ButtonNext = styled(Button)`
  margin-top: auto;
`;
