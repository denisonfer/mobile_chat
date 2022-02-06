import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Gradient, TextButton } from './styles';

interface IButtonProps extends TouchableOpacityProps {
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
