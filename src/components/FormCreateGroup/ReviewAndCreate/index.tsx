import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { useFormNewGroupStore } from '#/store/formNewGroup/useFormNewGroupStore';

import { ButtonNext, Container, Title } from './styles';

interface IProps {
  nextStep: () => void;
  previousStep: () => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const ReviewAndCreate = ({
  nextStep,
  previousStep,
  setCurrentPage,
}: IProps) => {
  const [moneyValue, setMoneyValue] = useState(0);

  const { saveForm } = useFormNewGroupStore();

  const handleValidFields = useCallback(() => {
    // saveForm(dataForm);

    nextStep();
    setCurrentPage(5);
  }, []);

  return (
    <Container>
      <Title>Revisar e Criar grupo</Title>

      <ButtonNext title="Próximo" onPress={handleValidFields} />
    </Container>
  );
};
