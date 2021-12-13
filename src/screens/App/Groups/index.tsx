import React from 'react';

import Button from '#/components/Button';
import { useAuthStore } from '#/store/auth/useAuthStore';

import { Container } from './styles';

const GroupsScreen: React.FC = () => {
  const { signOut } = useAuthStore();
  return (
    <Container>
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default GroupsScreen;
