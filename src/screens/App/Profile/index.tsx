import React from 'react';

import { useUserStore } from '#/store/user/useUserStore';

import {
  Avatar,
  ButtonBoxAvatar,
  Container,
  Gradient,
  Header,
  NameUser,
  Title,
} from './styles';

export const ProfileScreen = () => {
  const { user } = useUserStore();

  return (
    <Container>
      <Header>
        <Gradient>
          <NameUser>{user?.name}</NameUser>
        </Gradient>
      </Header>

      <ButtonBoxAvatar onPress={() => navigate('ProfileScreen')}>
        <Avatar source={{ uri: user?.avatar }} />
      </ButtonBoxAvatar>

      <Title>Tela do perfil</Title>
    </Container>
  );
};
