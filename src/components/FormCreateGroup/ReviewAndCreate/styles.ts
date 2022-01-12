import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import Button from '#/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
  margin-bottom: 36px;
`;

export const ButtonNext = styled(Button)`
  margin-top: ${RFPercentage(30)}px;
`;
