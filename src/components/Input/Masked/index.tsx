import React, {
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Control, Controller } from 'react-hook-form';
import {
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

import { Container, Error, Icon, InputTextMasked } from '../styles';

interface IInputProps extends TextInputMaskProps {
  icon: string | null;
  control: Control;
  name: string;
  error: string;
  bgWhite?: boolean;
  type: TextInputMaskTypeProp;
  setMoneyValue: Dispatch<SetStateAction<number>>;
  options?: {
    precision: number;
    separator: string;
    delimiter: string;
    unit: string;
    suffixUnit: string;
  };
}
interface IInputRef {
  focus(): void;
}

const InputMasked: React.ForwardRefRenderFunction<IInputRef, IInputProps> = (
  {
    icon,
    control,
    name,
    error,
    bgWhite,
    type,
    options,
    setMoneyValue,
    ...rest
  },
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
              {icon && <Icon bgWhite={bgWhite} name={icon} size={26} />}
              <InputTextMasked
                type={type}
                options={options}
                ref={inputElementRef}
                includeRawValueInChangeText
                onChangeText={(text, rawValue) => {
                  onChange(text);
                  if (!rawValue) return;
                  setMoneyValue(Number(rawValue));
                }}
                onFocus={handleOnFocus}
                onBlur={handleOnFilled}
                value={value}
                bgWhite={bgWhite}
                {...rest}
              />
            </>
          )}
        />
      </Container>

      {error && <Error>{error}</Error>}
    </>
  );
};

export default forwardRef(InputMasked);
