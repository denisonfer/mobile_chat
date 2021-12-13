import React from 'react';

import { useNavigation } from '@react-navigation/native';

import giftsAnimates from '#/assets/lotties/presente_animado.json';
import Button from '#/components/Button';

import {
  Container,
  Logo,
  LogoFinal,
  LottieAnimation,
  Span,
  Title,
  ViewLottie,
} from './styles';

const IntroScreen: React.FC = function () {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Bem-vindo ao</Title>
      <Logo>
        Tirei<LogoFinal>TU</LogoFinal>
      </Logo>

      <Span>Seu novo app para gerenciar seus amigos secretos</Span>

      <ViewLottie>
        <LottieAnimation source={giftsAnimates} autoPlay />
      </ViewLottie>
      <Button
        title="Acessar minha conta"
        onPress={() => navigate('SignInScreen')}
        animation="fadeInDown"
        delay={2500}
        duration={1000}
      />
      <Button
        isOutline
        title="Criar minha conta"
        onPress={() => navigate('SignUpScreen')}
        animation="fadeInDown"
        delay={2500}
        duration={1000}
      />

      <Span>
        Ao acessar você concorda com NOSSOS TERMOS e POLITICAS DE PRIVACIDADE.
      </Span>
    </Container>
  );
};

export default IntroScreen;
