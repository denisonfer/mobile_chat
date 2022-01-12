import { ScrollView } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from 'styled-components/native';

import Button from '#/components/Button';

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
  margin-bottom: 8px;
`;

export const RowResume = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ColumnResume = styled.View``;

export const ResumeTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY};
  margin-top: 16px;
`;

export const ResumeValue = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.SPAN};
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
  margin-right: 8px;
`;

export const RowButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
`;

export const ButtonNavigate = styled(Button)`
  width: ${RFPercentage(20)}px;
`;
