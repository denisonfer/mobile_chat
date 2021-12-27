import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Container, Error, Icon, InputText } from './styles';

interface IInputProps extends TextInputProps {
  icon: string | null;
  control: Control;
  name: string;
  error: string;
  hidePass: boolean;
  setHidePass: (value: boolean) => void;
  bgWhite?: boolean;
}
interface IInputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<IInputRef, IInputProps> = (
  { icon, control, name, error, hidePass, setHidePass, bgWhite, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnFilled = useCallback(() => {
    setIsFocused(false);
    setIsFilled(true);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <>
      <Container isFocused={isFocused} isErrored={!!error} bgWhite={bgWhite}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              {icon && <Icon name={icon} size={26} />}
              <InputText
                ref={inputElementRef}
                onChangeText={onChange}
                onFocus={handleOnFocus}
                onBlur={handleOnFilled}
                value={value}
                {...rest}
              />
              {name === 'password' && (
                <Icon
                  name={hidePass ? 'eye' : 'eye-with-line'}
                  onPress={() => setHidePass(!hidePass)}
                />
              )}
            </>
          )}
        />
      </Container>

      {error && <Error>{error}</Error>}
    </>
  );
};

export default forwardRef(Input);
