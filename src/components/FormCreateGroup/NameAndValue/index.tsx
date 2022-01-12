import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import Input from '#/components/Input';
import InputMasked from '#/components/Input/Masked';
import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import { ButtonNext, Container, Title } from './styles';

interface IProps {
  nextStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface IFormData {
  name: string;
  valueMin: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome do grupo obrigatório!'),
  valueMin: yup.string().required('Valor mínimo obrigatório!'),
});

export const NameAndValue = ({ nextStep, setCurrentPage }: IProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [moneyValue, setMoneyValue] = useState(0);

  const { saveForm } = useFormNewGroupStore();

  const handleValidFields = useCallback(
    (form: IFormData) => {
      const dataForm = {
        name: form.name,
        valueMin: moneyValue,
      };

      saveForm(dataForm);

      nextStep();
      setCurrentPage(1);
    },
    [moneyValue],
  );

  return (
    <Container>
      <Title>Nome & Valor mínimo</Title>

      <Input
        bgWhite
        name="name"
        icon="pencil"
        placeholder="Nome do grupo"
        control={control}
        error={errors.name && errors.name.message}
      />

      <InputMasked
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        bgWhite
        name="valueMin"
        icon="credit"
        placeholder="Valor mínimo"
        control={control}
        error={errors.valueMin && errors.valueMin.message}
        setMoneyValue={setMoneyValue}
      />

      <ButtonNext title="Próximo" onPress={handleSubmit(handleValidFields)} />
    </Container>
  );
};
