import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.BACKGROUND};
  height: ${RFPercentage(20)}px;
`;

export const Gradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.colors.GRADIENT_COLOR_1,
    theme.colors.GRADIENT_COLOR_2,
    theme.colors.GRADIENT_COLOR_3,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
}))`
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  border-bottom-right-radius: 60px;
`;

export const NameUser = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin-left: 16px;
`;

export const ButtonBoxAvatar = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.BACKGROUND};
  border-radius: 200px;
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  padding: 4px;
  margin-bottom: -25px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;
