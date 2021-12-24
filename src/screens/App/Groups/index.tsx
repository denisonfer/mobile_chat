import React from 'react';

import Button from '#/components/Button';
import { useAuthStore } from '#/store/auth/useAuthStore';
import { useUserStore } from '#/store/user/useUserStore';

import { Avatar, Container } from './styles';

const GroupsScreen = () => {
  const { signOut } = useAuthStore();
  const { user } = useUserStore();

  return (
    <Container>
      <Avatar source={{ uri: user?.avatar }} />
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default GroupsScreen;
