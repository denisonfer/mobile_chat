import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Vibration, Pressable } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Modalize } from 'react-native-modalize';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import * as yup from 'yup';

import Input from '#/components/Input';
import { useAuthStore } from '#/store/auth/useAuthStore';
import { useUserStore } from '#/store/user/useUserStore';

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
  ContainerModalForgotMyPass,
  Label,
  ButtonSubmitForgotMyPass,
  TextButtonForgotMyPass,
  InputForgotPassword,
  Error,
} from './styles';

const schemaSignIn = yup.object().shape({
  email: yup.string().email('Informe um e-mail válido').required('Obrigatório'),
  password: yup.string().min(6, 'Min. 6 caracteres').required('Obrigatório'),
});
const schemaForgotMyPass = yup.object().shape({
  email_forgot: yup
    .string()
    .email('Informe um e-mail válido')
    .required('Campo email é obrigatório'),
});

const SignInScreen = () => {
  const { navigate } = useNavigation();
  const passwordRef = useRef(null);
  const modalizeRef = useRef<Modalize>(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });
  const {
    register,
    // control: controlForgotMyPass,
    handleSubmit: handleSubmitForgotMyPass,
    formState: { errors: errorsForgotMyPass },
  } = useForm({
    resolver: yupResolver(schemaForgotMyPass),
  });

  const [hidePass, setHidePass] = useState(true);
  const [loadingButtonForgotMyPass, setLoadingButtonForgotMyPass] =
    useState(false);

  const { signInRequest, loading } = useAuthStore();
  const { saveUser, user: userInStore } = useUserStore();

  const openModalForgotMyPass = useCallback(() => {
    modalizeRef.current.open();
  }, []);

  const handleSignIn = useCallback(async form => {
    const { email, password } = form;
    const user = await signInRequest(email, password);
    saveUser(user);
  }, []);

  const handleForgotMyPass = useCallback(async form => {
    console.tron.log('form: ', form);
    try {
      setLoadingButtonForgotMyPass(true);

      const { email_forgot } = form;
      console.tron.log('email_forgot: ', email_forgot);

      /* const { status } = await api.put('/login/forgot-password', {
        email: email_forgot,
      });

      setLoadingButtonForgotMyPass(false);

      if (status === 200) {
        showMessage({
          message: 'E-mail enviado com sucesso!',
          type: 'success',
          icon: 'success',
          floating: true,
          duration: 2000,
        });
      } */
    } catch (error) {
      setLoadingButtonForgotMyPass(false);
      showMessage({
        message: `${error.response.data}`,
        type: 'danger',
        icon: 'danger',
        floating: true,
        duration: 2000,
      });
      console.error('✨✨✨ ------ error handleForgotMyPass =>', error);
    }
  }, []);

  const handleErrors = useCallback(() => {
    Vibration.vibrate(0.5 * 1000);
  }, []);

  useEffect(() => {
    if (userInStore) {
      setValue('email', userInStore.email, { shouldValidate: true });
    }
  }, [userInStore]);

  return (
    <>
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
                <ButtonForgotPassword onPress={openModalForgotMyPass}>
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
                {loading ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <TextButtonSignIn>ACESSAR MINHA CONTA</TextButtonSignIn>
                )}
              </ButtonSignIn>

              <ButtonSignUp onPress={() => navigate('SignUpScreen')}>
                <TextButtonSignUp>CADASTRAR</TextButtonSignUp>
              </ButtonSignUp>
            </GradientView>
          </Container>
        </Scroll>
      </KeyboardAvoid>

      <Modalize ref={modalizeRef} adjustToContentHeight withHandle={false}>
        <ContainerModalForgotMyPass>
          <Label>E-mail para recuperação de senha</Label>
          <InputForgotPassword
            placeholder="seu.nome@code7.com"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            {...register('email_forgot')}
          />

          {errorsForgotMyPass.email_forgot && (
            <Error>{errorsForgotMyPass.email_forgot.message}</Error>
          )}

          <ButtonSubmitForgotMyPass
            onPress={handleSubmitForgotMyPass(handleForgotMyPass)}
          >
            {loadingButtonForgotMyPass ? (
              <ActivityIndicator size="large" />
            ) : (
              <TextButtonForgotMyPass>Recuperar senha</TextButtonForgotMyPass>
            )}
          </ButtonSubmitForgotMyPass>
        </ContainerModalForgotMyPass>
      </Modalize>
    </>
  );
};

export default SignInScreen;
