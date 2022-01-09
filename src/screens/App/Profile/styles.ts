import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.BACKGROUND};
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

export const NameUser = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: ${RFValue(70)}px;
  position: absolute;
  bottom: 0;
  left: 20px;
`;

export const ButtonBoxAvatar = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.BACKGROUND};
  border-radius: 200px;
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  padding: 4px;
  margin-top: ${RFValue(-30)}px;
  margin-left: 20px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
  z-index: 10;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
`;
