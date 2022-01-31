/* eslint-disable react/require-default-props */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Gradient, TextButton } from './styles';

interface IButtonProps extends RectButtonProps {
  title: string;
  isOutline?: boolean;
}

const Button = ({ title, isOutline, ...rest }: IButtonProps) => {
  return (
    <Container {...rest} isOutline={isOutline}>
      {isOutline ? (
        <TextButton isOutline={isOutline}>{title}</TextButton>
      ) : (
        <Gradient>
          <TextButton>{title}</TextButton>
        </Gradient>
      )}
    </Container>
  );
};

export default Button;
