import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RFValue } from 'react-native-responsive-fontsize';
import IconEntypo from 'react-native-vector-icons/Entypo';

import styled, { css } from 'styled-components/native';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isFilled?: boolean;
  bgWhite?: boolean;
}

interface IIconProps {
  bgWhite?: boolean;
}
interface IInputTextProps {
  bgWhite?: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: ${RFValue(50)}px;
  padding: 0 16px;
  border-radius: 7px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme, bgWhite }) => (bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE)};

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.RED};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({ theme, bgWhite }) =>
        bgWhite ? theme.colors.PRIMARY : theme.colors.TEXT_WHITE};
    `}
`;

export const InputText = styled(TextInput).attrs(({ theme, bgWhite }) => ({
  placeholderTextColor: bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE,
}))<IInputTextProps>`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;
  margin-left: 16px;
  color: ${({ theme, bgWhite }) =>
    bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE};
  height: 100%;
`;

export const InputTextMasked = styled(TextInputMask).attrs(
  ({ theme, bgWhite }) => ({
    placeholderTextColor: bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE,
  }),
)<IInputTextProps>`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;
  margin-left: 16px;
  color: ${({ theme, bgWhite }) =>
    bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE};
  height: 100%;
`;

export const Icon = styled(IconEntypo)<IIconProps>`
  color: ${({ theme, bgWhite }) =>
    bgWhite ? '#5a5d68' : theme.colors.TEXT_WHITE};
  font-size: ${RFValue(18)}px;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(14)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 10px;
  margin-left: 10px;
`;
