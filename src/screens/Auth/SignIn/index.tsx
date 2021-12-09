import React from 'react';

import {
  ButtonForgotPassword,
  Container,
  GradientView,
  Logo,
  Row,
  TextButtonForgot,
  Title,
} from './styles';

const SignInScreen: React.FC = () => {
  return (
    <Container>
      <Logo>TireiTU</Logo>

      <GradientView>
        <Row>
          <Title>Login</Title>
          <ButtonForgotPassword>
            <TextButtonForgot>Esqueci minha senha</TextButtonForgot>
          </ButtonForgotPassword>
        </Row>
      </GradientView>
    </Container>
  );
};

export default SignInScreen;
