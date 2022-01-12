import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.BACKGROUND};
  z-index: 10;
  align-items: center;
  justify-content: center;
`;

export const LottieBox = styled.View`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;

export const LottieAnimation = styled(LottieView)``;
