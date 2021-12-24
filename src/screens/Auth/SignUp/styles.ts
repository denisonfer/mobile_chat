import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import TypeWriter from 'react-native-typewriter';
import IconVi from 'react-native-vector-icons/MaterialCommunityIcons';

import styled from 'styled-components/native';

const AnimatedGradient = Animatable.createAnimatableComponent(LinearGradient);

const makeSlideInTransition = (type: string) => {
  return {
    from: {
      [type]: Dimensions.get('window').height,
    },
    to: {
      [type]: 0,
    },
  };
};

const slideInUp = makeSlideInTransition('translateY');

export const KeyboardAvoid = styled(KeyboardAvoidingView).attrs({
  enabled: true,
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const Scroll = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
  keyboardShouldPersistTaps: 'handled',
  showsVerticalScrollIndicator: false,
})``;

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Logo = styled(TypeWriter).attrs({
  typing: 1,
  initialDelay: 800,
  fixed: true,
})`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.LOGO};
  color: ${({ theme }) => theme.colors.TITLE};
  margin-top: ${RFPercentage(3)}px;
`;

export const LogoFinal = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.fonts.LOGO};
  color: ${({ theme }) => theme.colors.PRIMARY};
`;

export const Span = styled(Animatable.Text).attrs({
  animation: 'fadeIn',
  delay: 1400,
  duration: 1000,
})`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.SPAN};
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
`;

export const GradientView = styled(AnimatedGradient).attrs(({ theme }) => ({
  colors: [
    theme.colors.GRADIENT_COLOR_1,
    theme.colors.GRADIENT_COLOR_2,
    theme.colors.GRADIENT_COLOR_3,
  ],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
  easing: 'ease',
  animation: slideInUp,
  delay: 2000,
  duration: 1500,
}))`
  border-radius: 20px;
  padding: 23px 13px;
  margin-top: auto;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
`;

export const ButtonAddAvatar = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 150px;
  border: 4px solid ${({ theme }) => theme.colors.GRADIENT_COLOR_2};
  background: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconVi)`
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-size: ${RFValue(26)}px;
`;

export const Avatar = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 100px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.TEXT_WHITE};
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: ${RFValue(50)}px;
`;

export const TextButtonSignUp = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

export const ButtonSignIn = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.colors.TEXT_WHITE};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(19)}px;
  height: ${RFValue(50)}px;
  align-self: flex-start;
  margin-top: 50px;
  padding: 0 10px;
`;

export const TextButtonSignIn = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
`;
