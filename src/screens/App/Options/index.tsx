import React from 'react';

import Button from '#/components/Button';
import { useAuthStore } from '#/store/auth/useAuthStore';

import { Container, Title } from './styles';

export const OptionsScreen = () => {
  const { signOut } = useAuthStore();

  return (
    <Container>
      <Title>Tela de opções do app</Title>

      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};
