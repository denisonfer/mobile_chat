import React from 'react';

import giftsAnimates from '#/assets/lotties/presente_animado.json';
import Button from '#/components/Button';
import { useThemeStore } from '#/store/theme/useTheme';

import {
  Container,
  Logo,
  LottieAnimation,
  Span,
  Title,
  ViewLottie,
} from './styles';

const IntroScreen: React.FC = function () {
  const { toggleTheme } = useThemeStore();

  return (
    <Container>
      <Title>Bem-vindo ao</Title>
      <Logo>TireiTU</Logo>

      <Span>Seu novo app para gerenciar seus amigos secretos</Span>

      <ViewLottie>
        <LottieAnimation source={giftsAnimates} autoPlay />
      </ViewLottie>
      <Button title="Acessar minha conta" onPress={toggleTheme} />
      <Button isOutline title="Criar minha conta" />

      <Span>
        Ao acessar o app você concorda com NOSSOS TERMOS e POLITICAS DE
        PRIVACIDADE.
      </Span>
    </Container>
  );
};

export default IntroScreen;
