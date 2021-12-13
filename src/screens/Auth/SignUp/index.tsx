import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Vibration } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import * as yup from 'yup';

import Input from '#/components/Input';
import { useAuthStore } from '#/store/auth/useAuthStore';
import { useUserStore } from '#/store/user/useUserStore';

import {
  Avatar,
  ButtonAddAvatar,
  ButtonSignIn,
  ButtonSignUp,
  Container,
  GradientView,
  KeyboardAvoid,
  Logo,
  LogoFinal,
  Row,
  Icon,
  Scroll,
  Span,
  TextButtonSignIn,
  TextButtonSignUp,
  Title,
} from './styles';

const schemaSignUp = yup.object().shape({
  name: yup.string().min(3).required('Obrigatório'),
  email: yup.string().email('Informe um e-mail válido').required('Obrigatório'),
  password: yup.string().min(6, 'Min. 6 caracteres').required('Obrigatório'),
});

const SignUpScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const passwordRef = useRef(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  const [hidePass, setHidePass] = useState(true);
  const [avatar, setAvatar] = useState('');

  const { signInRequest, loading } = useAuthStore();
  const { saveUser } = useUserStore();

  const handleSignUp = useCallback(async form => {
    const { name, email, password } = form;
    const user = await signInRequest(email, password);
    saveUser(user);
  }, []);

  const handleErrors = useCallback(() => {
    Vibration.vibrate(0.5 * 1000);
  }, []);

  const handlePickAvatar = useCallback(() => {
    console.tron.log('HANDLE PICK AVATAR');
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
              <Title>Cadastro</Title>

              <ButtonAddAvatar onPress={handlePickAvatar}>
                {avatar ? (
                  <Avatar source={{ uri: avatar }} />
                ) : (
                  <Icon name="camera-plus" />
                )}
              </ButtonAddAvatar>
            </Row>

            <Input
              name="name"
              placeholder="Digite seu nome"
              control={control}
              icon="user"
              autoCapitalize="words"
              returnKeyType="next"
              error={errors.name && errors.name.message}
            />

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

            <ButtonSignUp onPress={handleSubmit(handleSignUp, handleErrors)}>
              <TextButtonSignUp>
                {loading ? 'BUSCANDO NO SERVIDOR...' : 'CRIAR MINHA CONTA'}
              </TextButtonSignUp>
            </ButtonSignUp>

            <ButtonSignIn onPress={() => navigate('SignInScreen')}>
              <TextButtonSignIn>LOGIN</TextButtonSignIn>
            </ButtonSignIn>
          </GradientView>
        </Container>
      </Scroll>
    </KeyboardAvoid>
  );
};

export default SignUpScreen;
