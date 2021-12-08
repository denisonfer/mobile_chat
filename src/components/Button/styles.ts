import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

interface IButtonProps {
  isOutline?: boolean;
}

export const Container = styled(RectButton)<IButtonProps>`
  height: ${RFValue(46)}px;
  box-shadow: 1px 1px 12px ${({ theme }) => theme.colors.PRIMARY};

  ${({ isOutline, theme }) =>
    isOutline &&
    css`
      border: 1px solid ${theme.colors.PRIMARY};
      border-radius: 4px;
      align-items: center;
      justify-content: center;
      margin-top: 18px;
    `}
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.colors.GRADIENT_COLOR_1,
    theme.colors.GRADIENT_COLOR_2,
    theme.colors.GRADIENT_COLOR_3,
  ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text<IButtonProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme, isOutline }) =>
    isOutline ? theme.colors.PRIMARY : theme.colors.TEXT_WHITE};
  text-transform: uppercase;
`;
