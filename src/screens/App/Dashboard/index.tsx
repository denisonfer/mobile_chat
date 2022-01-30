import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Header from '#/components/Header';
import {
  IGroupsData,
  loadGroupsRequest,
} from '#/services/requests/Group/loadGroups.request';
import useThemeStore from '#/store/theme/useTheme';
import { useUserStore } from '#/store/user/useUserStore';

import {
  Container,
  ButtonCreateGroup,
  Icon,
  Content,
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
  const { isDarkTheme } = useThemeStore();

  const [groups, setGroups] = useState<IGroupsData[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadGroups() {
        const response = await loadGroupsRequest();

        if (!response) {
          return;
        }

        setGroups(response);
      }

      loadGroups();
    }, []),
  );

  return (
    <Container>
      <StatusBar backgroundColor="#5200FF" />
      <Header title={`Olá, ${user?.name}`} />

      <ButtonCreateGroup onPress={() => navigate('CreateGroupScreen')}>
        <Icon name="plus-circle" color={isDarkTheme ? '#f2f2f2' : '#5200FF'} />
      </ButtonCreateGroup>

      <Scroll>
        <Content>
          {groups.map(group => (
            <ButtonGroupContainer
              key={group.id}
              status={group.status_group_id}
              onPress={() => navigate('GroupStackScreen', { group })}
            >
              <GroupName>{group.name}</GroupName>

              <Row>
                <ShapeStatus status={group.status_group_id}>
                  <Status>{group.status_group_title}</Status>
                </ShapeStatus>

                <Info>{group.members_qtd} participantes</Info>
              </Row>
            </ButtonGroupContainer>
          ))}
        </Content>
      </Scroll>
    </Container>
  );
};
