import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Title, Gradient, ButtonReturn, Icon } from './styles';

interface IHeaderProps {
  title: string;
  hasButtonReturn?: boolean;
}

const Header = ({ title, hasButtonReturn }: IHeaderProps) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Gradient>
        {hasButtonReturn && (
          <ButtonReturn onPress={() => goBack()}>
            <Icon name="arrow-back-ios" size={36} />
          </ButtonReturn>
        )}
        <Title>{title}</Title>
      </Gradient>
    </Container>
  );
};

export default Header;
