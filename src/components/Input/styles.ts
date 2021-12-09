import { RFValue } from 'react-native-responsive-fontsize';
import IconEntypo from 'react-native-vector-icons/Entypo';

import styled, { css } from 'styled-components/native';

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: ${RFValue(45)}px;
  padding: 0 16px;
  border-radius: 7px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.NEUTRAL};

  ${props =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.RED};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.TEXT_WHITE};
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(16)}px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.NEUTRAL};
`;

export const Icon = styled(IconEntypo)`
  color: ${({ theme }) => theme.colors.NEUTRAL};
`;
