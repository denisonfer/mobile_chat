import { ScrollView } from 'react-native';
import AnimatedLinearGradient from 'react-native-animated-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

interface IShapeStatus {
  status: string;
}

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

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

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

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: 36px;
`;

export const GroupContainer = styled.View<IShapeStatus>`
  background: #f2f2f2;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right-width: 7px;
  border-right-color: ${({ theme, status }) =>
    status === '1'
      ? theme.colors.STATUS_FASE_1
      : status === '2'
      ? theme.colors.STATUS_FASE_2
      : theme.colors.STATUS_FASE_3};
  margin-bottom: 16px;
`;

export const GroupName = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  margin: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ShapeStatus = styled.View<IShapeStatus>`
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${({ theme, status }) =>
    status === '1'
      ? theme.colors.STATUS_FASE_1
      : status === '2'
      ? theme.colors.STATUS_FASE_2
      : theme.colors.STATUS_FASE_3};
  padding: 6px 8px;
`;

export const Status = styled.Text`
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const Info = styled.Text`
  color: #777777;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin-left: 16px;
`;
