import React, { useState } from 'react';
import { StatusBar } from 'react-native';

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
  GroupContainer,
  GroupName,
  Row,
  ShapeStatus,
  Status,
  Info,
  Scroll,
} from './styles';

const DashboardScreen = () => {
  const { signOut } = useAuthStore();
  const { user } = useUserStore();

  const [groups, setGroups] = useState([
    {
      id: '1',
      name: 'Grupo dos amigos',
      members_quantity: 14,
      status: {
        id: '1',
        title: 'Aguardando sorteio',
      },
    },
    {
      id: '2',
      name: 'Grupo da academia',
      members_quantity: 8,
      status: {
        id: '2',
        title: 'Sorteio realizado',
      },
    },
    {
      id: '3',
      name: 'Grupo do trabalho',
      members_quantity: 26,
      status: {
        id: '3',
        title: 'Evento realizado',
      },
    },
  ]);

  return (
    <Container>
      <StatusBar backgroundColor="#5200FF" />
      <Header>
        <Gradient>
          <ButtonBoxAvatar onPress={() => alert('Levar para tela de perfil')}>
            <Avatar source={{ uri: user?.avatar }} />
          </ButtonBoxAvatar>

          <NameUser>{user?.name}</NameUser>
        </Gradient>
      </Header>

      <Scroll>
        <Content>
          {groups.map(group => (
            <GroupContainer key={group.id} status={group.status.id}>
              <GroupName>{group.name}</GroupName>

              <Row>
                <ShapeStatus status={group.status.id}>
                  <Status>{group.status.title}</Status>
                </ShapeStatus>

                <Info>{group.members_quantity} participantes</Info>
              </Row>
            </GroupContainer>
          ))}
          <Button title="Sair" onPress={signOut} />
        </Content>
      </Scroll>
    </Container>
  );
};

export default DashboardScreen;
