import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StatusBar } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { yupResolver } from '@hookform/resolvers/yup';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import * as yup from 'yup';

import Header from '#/components/Header';
import { MyActivityIndicator } from '#/components/MyActivityIndicator';
import { addUserInGroupRequest } from '#/services/requests/Group/addUserInGroup.request';
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
  ViewNoContent,
  TextNoContent,
  ButtonEnterGroup,
  IconEnterInGroup,
  ContainerEnterInGroup,
  Title,
  InputInviteCode,
  ButtonSendInviteCode,
} from './styles';

interface IFormData {
  code_invite: string;
}

const schema = yup.object().shape({
  code_invite: yup.string().required('Campo obrigatório!'),
});

export const DashboardScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  const { navigate } = useNavigation();
  const { user } = useUserStore();
  const { isDarkTheme } = useThemeStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [groups, setGroups] = useState<IGroupsData[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadGroups() {
    const response = await loadGroupsRequest();

    if (!response) {
      return;
    }

    setGroups(response);
  }

  useFocusEffect(
    useCallback(() => {
      loadGroups();
    }, []),
  );

  const handleSendInviteCode = useCallback(
    async (form: IFormData) => {
      const { code_invite } = form;

      setLoading(true);

      await addUserInGroupRequest(code_invite);

      setLoading(false);

      modalizeRef.current!.close();
      reset();
      loadGroups();
    },
    [reset],
  );

  return (
    <>
      {loading && <MyActivityIndicator />}

      <Container>
        <StatusBar backgroundColor="#5200FF" />
        <Header title={`Olá, ${user?.name}`} />

        <ButtonEnterGroup onPress={() => modalizeRef.current!.open()}>
          <IconEnterInGroup name="enter" color="#FFFFFF" />
        </ButtonEnterGroup>

        <ButtonCreateGroup onPress={() => navigate('CreateGroupScreen')}>
          <Icon
            name="plus-circle"
            color={isDarkTheme ? '#f2f2f2' : '#5200FF'}
          />
        </ButtonCreateGroup>

        <Scroll>
          <Content>
            {groups.length === 0 ? (
              <ViewNoContent>
                <TextNoContent>
                  Você não tem grupo cadastrado, clique no (+) para criar ou
                  entre em um grupo
                </TextNoContent>
              </ViewNoContent>
            ) : (
              <>
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
              </>
            )}
          </Content>
        </Scroll>

        <Modalize ref={modalizeRef} adjustToContentHeight withHandle={false}>
          <ContainerEnterInGroup>
            <Title>Entrar no grupo</Title>

            <Info style={{ marginLeft: 0, marginTop: 24, marginBottom: 16 }}>
              Entre com o código do grupo que você recebeu
            </Info>

            <InputInviteCode
              control={control}
              name="code_invite"
              icon="key"
              error={errors.code_invite && errors.code_invite.message}
              bgWhite
            />

            <ButtonSendInviteCode
              title="Enviar código"
              onPress={handleSubmit(handleSendInviteCode)}
            />
          </ContainerEnterInGroup>
        </Modalize>
      </Container>
    </>
  );
};
