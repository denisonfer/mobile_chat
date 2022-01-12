import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFPercentage(20)}px;
`;

export const Gradient = styled(AnimatedLinearGradient).attrs(({ theme }) => ({
  customColors: [
    theme.colors.GRADIENT_COLOR_1,
    theme.colors.GRADIENT_COLOR_2,
    theme.colors.GRADIENT_COLOR_3,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  position: relative;
`;

export const ButtonReturn = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  position: absolute;
  top: 40px;
  left: 20px;
`;

export const Icon = styled(IconMaterial)`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  position: absolute;
  bottom: 0;
  left: 20px;
`;
