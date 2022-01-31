import { Platform, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import IconFA from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

interface IShapeStatus {
  status: number;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px ${Platform.OS === 'ios' ? 140 : 0}px 20px;
  margin-top: 36px;
`;

export const ButtonCreateGroup = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BACKGROUND};
  border-radius: ${RFValue(200)}px;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-top: ${RFValue(-30)}px;
  margin-right: 20px;
  align-self: flex-end;
`;

export const Icon = styled(IconFA)`
  font-size: ${RFValue(50)}px;
`;

export const ViewNoContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextNoContent = styled.Text`
  color: ${({ theme }) => theme.colors.NEUTRAL};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  text-align: center;
`;

export const ButtonGroupContainer = styled.TouchableOpacity<IShapeStatus>`
  background: #f2f2f2;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right-width: 7px;
  border-right-color: ${({ theme, status }) =>
    status === 1
      ? theme.colors.STATUS_FASE_1
      : status === 2
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
    status === 1
      ? theme.colors.STATUS_FASE_1
      : status === 2
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
