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

import {
  ButtonEdit,
  ButtonSubmit,
  Container,
  Content,
  IconEdit,
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
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [showButtonSubmit, setShowButtonSubmit] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      async function loadGiftsList() {
        const response = await LoadGiftsListRequest();

        if (!response) {
          setLoading(false);
          setIsEditable(false);
          setShowButtonSubmit(true);
          return;
        }

        const { gift_1, gift_2, gift_3 } = response;

        setValue('gift_1', gift_1);
        setValue('gift_2', gift_2);
        setValue('gift_3', gift_3);

        setLoading(false);
        setIsEditable(true);
        setShowButtonSubmit(false);
      }

      loadGiftsList();
    }, []),
  );

  const handleSubmitGiftList = useCallback(async (form: IFormData) => {
    const { gift_1, gift_2, gift_3 } = form;

    setLoading(true);

    await SaveGiftsListRequest({ gift_1, gift_2, gift_3 });

    setLoading(false);

    reset();
  }, []);

  const handleAbilityEdition = useCallback(() => {
    setIsEditable(!isEditable);
    setShowButtonSubmit(true);
    setFocus('gift_1');
  }, [isEditable]);

  return (
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
          <Title>Informe suas opções de presentes</Title>
        )}

        <ViewForm>
          <Input
            name="gift_1"
            icon="shopping-bag"
            placeholder="Opção 1 de presente"
            control={control}
            error={errors.gift_1 && errors.gift_1.message}
            bgWhite
            editable={showButtonSubmit}
          />

          <Input
            name="gift_2"
            icon="shopping-bag"
            placeholder="Opção 2 de presente"
            control={control}
            error={errors.gift_2 && errors.gift_2.message}
            bgWhite
            editable={showButtonSubmit}
          />

          <Input
            name="gift_3"
            icon="shopping-bag"
            placeholder="Opção 3 de presente"
            control={control}
            error={errors.gift_3 && errors.gift_3.message}
            bgWhite
            editable={showButtonSubmit}
          />

          {showButtonSubmit && (
            <ButtonSubmit
              title="Enviar lista"
              onPress={() => handleSubmit(handleSubmitGiftList)}
            />
          )}
        </ViewForm>
      </Content>
    </Container>
  );
};
