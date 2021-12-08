import * as Animatable from 'react-native-animatable';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import TypeWriter from 'react-native-typewriter';

import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;
export const Title = styled(Animatable.Text).attrs({
  animation: 'bounceInLeft',
  delay: 1000,
  duration: 1000,
})`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TITLE};
`;

export const Logo = styled(TypeWriter).attrs({
  typing: 1,
  initialDelay: 1600,
  minDelay: 300,
  fixed: true,
})`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.LOGO};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.TITLE};
`;

export const Span = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.SPAN};
  margin-top: 49px;
  text-align: center;
`;

export const ViewLottie = styled.View`
  height: ${RFPercentage(40)}px;
  width: 100%;
`;

export const LottieAnimation = styled(Lottie)``;
