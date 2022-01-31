import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

import Button from '#/components/Button';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.TITLE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ViewForm = styled.View`
  flex: 1;
  margin-top: 36px;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 36px;
`;
