import { BorderlessButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Logo = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.LOGO};
  color: ${({ theme }) => theme.colors.TITLE};
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
`;

export const GradientView = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.colors.GRADIENT_COLOR_1,
    theme.colors.GRADIENT_COLOR_2,
    theme.colors.GRADIENT_COLOR_3,
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))`
  border-radius: 20px;
  padding: 23px 13px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonForgotPassword = styled(BorderlessButton)``;

export const TextButtonForgot = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  text-decoration: underline;
`;
