import React from 'react';

import lottieAnimation from '#/assets/lotties/loading-animation.json';

import { Container, LottieAnimation, LottieBox } from './styles';

export const MyActivityIndicator = () => {
  return (
    <Container>
      <LottieBox>
        <LottieAnimation source={lottieAnimation} autoPlay loop />
      </LottieBox>
    </Container>
  );
};
