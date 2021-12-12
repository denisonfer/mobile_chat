import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Vibration } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import Input from '#/components/Input';
import { useAuthStore } from '#/store/auth/useAuthStore';

import {
  ButtonForgotPassword,
  ButtonSignIn,
  ButtonSignUp,
  Container,
  GradientView,
  KeyboardAvoid,
  Logo,
  LogoFinal,
  Row,
  Scroll,
  Span,
  TextButtonForgot,
  TextButtonSignIn,
  TextButtonSignUp,
  Title,
} from './styles';

const schemaSignIn = yup.object().shape({
  email: yup.string().email('Informe um e-mail válido').required('Obrigatório'),
  password: yup.string().min(6, 'Min. 6 caracteres').required('Obrigatório'),
});

const SignInScreen: React.FC = () => {
  const passwordRef = useRef(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });

  const [hidePass, setHidePass] = useState(true);

  const { signInRequest, loading } = useAuthStore();

  const handleSignIn = useCallback(async form => {
    const { email, password } = form;
    await signInRequest(email, password);
  }, []);

  const handleErrors = useCallback(() => {
    Vibration.vibrate(0.5 * 1000);
  }, []);

  return (
    <KeyboardAvoid>
      <Scroll>
        <Container>
          <Logo>
            Tirei<LogoFinal>TU</LogoFinal>
          </Logo>
          <Span>Seu novo app para gerenciar seus amigos secretos</Span>

          <GradientView>
            <Row>
              <Title>Login</Title>
              <ButtonForgotPassword>
                <TextButtonForgot>Esqueci minha senha</TextButtonForgot>
              </ButtonForgotPassword>
            </Row>

            <Input
              name="email"
              placeholder="Digite seu e-mail"
              control={control}
              icon="mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              error={errors.email && errors.email.message}
            />
            <Input
              ref={passwordRef}
              name="password"
              placeholder="Digite sua senha"
              control={control}
              secureTextEntry={hidePass}
              hidePass={hidePass}
              setHidePass={setHidePass}
              icon="lock"
              error={errors.password && errors.password.message}
            />

            <ButtonSignIn onPress={handleSubmit(handleSignIn, handleErrors)}>
              <TextButtonSignIn>
                {loading ? 'BUSCANDO NO SERVIDOR...' : 'ACESSAR MINHA CONTA'}
              </TextButtonSignIn>
            </ButtonSignIn>

            <ButtonSignUp>
              <TextButtonSignUp>CADASTRAR</TextButtonSignUp>
            </ButtonSignUp>
          </GradientView>
        </Container>
      </Scroll>
    </KeyboardAvoid>
  );
};

export default SignInScreen;
