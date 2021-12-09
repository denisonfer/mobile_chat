import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Icon, InputText } from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon?: string;
  iconType: string;
}

interface IInputValueRef {
  value: string;
}

interface IInputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInputProps> = ({
  icon,
  ...rest
}) => {
  return (
    <Container isFocused isErrored={false}>
      {ìcon && <Icon name={icon} size={26} />}
      <InputText {...rest} />
    </Container>
    /*  <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        type={iconType}
        size={20}
        color={
          isFocused || isFilled
            ? constants.COLOR_PRIMARY
            : constants.COLOR_OFF_GRAY
        }
      />
      <InputText
        ref={inputElementRef}
        defaultValue={defaultValue}
        onFocus={handleOnFocus}
        onBlur={handleOnFilled}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        keyboardAppearance="dark"
        placeholderTextColor={constants.COLOR_OFF_GRAY}
        {...rest}
      />
    </Container> */
  );
};

export default Input;
