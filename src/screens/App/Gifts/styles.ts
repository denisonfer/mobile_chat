import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import IconEntypo from 'react-native-vector-icons/Entypo';

import styled from 'styled-components/native';

import Button from '#/components/Button';

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const ButtonEdit = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.TITLE};
  border-radius: 4px;
  width: ${RFValue(200)}px;
  padding: 8px 16px;
`;

export const IconEdit = styled(IconEntypo)`
  color: ${({ theme }) => theme.colors.TITLE};
  font-size: ${RFValue(18)}px;
  margin-right: 16px;
`;

export const TextButton = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.TITLE};
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
