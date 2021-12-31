import React from 'react';

import Button from '#/components/Button';
import { useAuthStore } from '#/store/auth/useAuthStore';
import { useUserStore } from '#/store/user/useUserStore';

import {
  Avatar,
  Container,
  ButtonBoxAvatar,
  Content,
  Gradient,
  Header,
  NameUser,
} from './styles';

const DashboardScreen = () => {
  const { signOut } = useAuthStore();
  const { user } = useUserStore();

  return (
    <Container>
      <Header>
        <Gradient>
          <ButtonBoxAvatar onPress={() => alert('Levar para tela de perfil')}>
            <Avatar source={{ uri: user?.avatar }} />
          </ButtonBoxAvatar>

          <NameUser>{user?.name}</NameUser>
        </Gradient>
      </Header>

      <Content>
        <Button title="Sair" onPress={signOut} />
      </Content>
    </Container>
  );
};

export default DashboardScreen;
