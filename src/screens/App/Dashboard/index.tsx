import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useUserStore } from '#/store/user/useUserStore';

import {
  Avatar,
  Container,
  ButtonBoxAvatar,
  Content,
  Gradient,
  Header,
  NameUser,
  ButtonGroupContainer,
  GroupName,
  Row,
  ShapeStatus,
  Status,
  Info,
  Scroll,
} from './styles';

export const DashboardScreen = () => {
  const { navigate } = useNavigation();
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
    {
      id: '4',
      name: 'Grupo da igreja',
      members_quantity: 44,
      status: {
        id: '3',
        title: 'Evento realizado',
      },
    },
    {
      id: '5',
      name: 'Grupo do Muay Thai',
      members_quantity: 44,
      status: {
        id: '2',
        title: 'Sorteio realizado',
      },
    },
    {
      id: '6',
      name: 'Grupo do Muay Thai',
      members_quantity: 44,
      status: {
        id: '2',
        title: 'Sorteio realizado',
      },
    },
    {
      id: '7',
      name: 'Grupo do Muay Thai',
      members_quantity: 44,
      status: {
        id: '2',
        title: 'Sorteio realizado',
      },
    },
  ]);

  return (
    <Container>
      <StatusBar backgroundColor="#5200FF" />
      <Header>
        <Gradient>
          <NameUser>{user?.name}</NameUser>
        </Gradient>
      </Header>

      <ButtonBoxAvatar onPress={() => navigate('ProfileScreen')}>
        <Avatar source={{ uri: user?.avatar }} />
      </ButtonBoxAvatar>

      <Scroll>
        <Content>
          {groups.map(group => (
            <ButtonGroupContainer
              key={group.id}
              status={group.status.id}
              onPress={() => navigate('GroupStackScreen', { group })}
            >
              <GroupName>{group.name}</GroupName>

              <Row>
                <ShapeStatus status={group.status.id}>
                  <Status>{group.status.title}</Status>
                </ShapeStatus>

                <Info>{group.members_quantity} participantes</Info>
              </Row>
            </ButtonGroupContainer>
          ))}
        </Content>
      </Scroll>
    </Container>
  );
};
