import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useFocusEffect } from '@react-navigation/native';

import * as yup from 'yup';

import Header from '#/components/Header';
import Input from '#/components/Input';
import { MyActivityIndicator } from '#/components/MyActivityIndicator';
import { LoadGiftsListRequest } from '#/services/requests/User/LoadGiftsList.request';
import { SaveGiftsListRequest } from '#/services/requests/User/SaveGiftsList.request';
import { updateGiftsListRequest } from '#/services/requests/User/updateGiftsList.request';

import {
  ButtonEdit,
  ButtonSubmit,
  Container,
  Content,
  IconEdit,
  Scroll,
  TextButton,
  Title,
  ViewForm,
} from './styles';

interface IFormData {
  gift_1: string;
  gift_2: string;
  gift_3: string;
}

const schema = yup.object().shape({
  gift_1: yup.string().required('Campo obrigatório!'),
  gift_2: yup.string().required('Campo obrigatório!'),
  gift_3: yup.string().required('Campo obrigatório!'),
});

export const GiftsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [giftListID, setGiftListID] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [itsToEditTheList, setItsToEditTheList] = useState(false);
  const [showButtonSubmit, setShowButtonSubmit] = useState(true);
  const [toggleEditCancelButtonShow, setToggleEditCancelButtonShow] =
    useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      async function loadGiftsList() {
        const response = await LoadGiftsListRequest();

        if (!response) {
          setLoading(false);
          setIsEditable(false);
          setShowButtonSubmit(true);
          setItsToEditTheList(false);
          return;
        }

        const { gift_1, gift_2, gift_3, id } = response;

        setValue('gift_1', gift_1);
        setValue('gift_2', gift_2);
        setValue('gift_3', gift_3);
        setGiftListID(id);

        setLoading(false);
        setIsEditable(true);
        setShowButtonSubmit(false);
        setItsToEditTheList(true);
      }

      loadGiftsList();
    }, [setValue]),
  );

  const handleSubmitGiftList = useCallback(
    async (form: IFormData) => {
      const { gift_1, gift_2, gift_3 } = form;

      setLoading(true);

      if (itsToEditTheList) {
        await updateGiftsListRequest({
          gift_1,
          gift_2,
          gift_3,
          gift_id: giftListID,
        });

        setIsEditable(true);
        setShowButtonSubmit(false);
      } else {
        await SaveGiftsListRequest({ gift_1, gift_2, gift_3 });
        reset();
      }

      setLoading(false);
    },
    [itsToEditTheList, giftListID, reset],
  );

  const handleAbilityEdition = useCallback(() => {
    setIsEditable(!isEditable);
    setShowButtonSubmit(true);
    setToggleEditCancelButtonShow(true);
  }, [isEditable]);

  const handleCancelEdition = useCallback(() => {
    setIsEditable(!isEditable);
    setShowButtonSubmit(false);
    setToggleEditCancelButtonShow(false);
  }, [isEditable]);

  return (
    <Scroll>
      <Container>
        {loading && <MyActivityIndicator />}

        <Header title="Lista de desejos" />

        <Content>
          {isEditable ? (
            <ButtonEdit onPress={handleAbilityEdition}>
              <IconEdit name="edit" />
              <TextButton>Habilitar edição</TextButton>
            </ButtonEdit>
          ) : (
            <Title>
              Informe suas opções de presentes
              {toggleEditCancelButtonShow && (
                <ButtonEdit onPress={handleCancelEdition}>
                  <IconEdit name="circle-with-cross" />
                  <TextButton>Cancelar edição</TextButton>
                </ButtonEdit>
              )}
            </Title>
          )}

          <ViewForm>
            <Input
              name="gift_1"
              icon="shopping-bag"
              placeholder="Opção 1 de presente"
              control={control}
              error={errors.gift_1 && errors.gift_1.message}
              bgWhite
              editable={!isEditable}
            />

            <Input
              name="gift_2"
              icon="shopping-bag"
              placeholder="Opção 2 de presente"
              control={control}
              error={errors.gift_2 && errors.gift_2.message}
              bgWhite
              editable={!isEditable}
            />

            <Input
              name="gift_3"
              icon="shopping-bag"
              placeholder="Opção 3 de presente"
              control={control}
              error={errors.gift_3 && errors.gift_3.message}
              bgWhite
              editable={!isEditable}
            />

            {showButtonSubmit && (
              <ButtonSubmit
                title="Enviar lista"
                onPress={handleSubmit(handleSubmitGiftList)}
              />
            )}
          </ViewForm>
        </Content>
      </Container>
    </Scroll>
  );
};
