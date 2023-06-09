import React from 'react';
import {TextInput} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {InputProps} from '../typings/Inputs';
import {COLORS} from '../constants/colors';
import MainContainerWrapper from './MainWrapper';
import {ResponsiveUi} from './responsive-ui';

const TextInputComponent: React.FC<InputProps> = ({label, ...props}) => {
  const tailwind = useTailwind();

  return (
    <MainContainerWrapper
      style={[tailwind('w-11/12 justify-center items-center')]}>
      <ResponsiveUi.Text
        regular
        h1
        color={COLORS.accent500}
        style={[tailwind('text-center mb-12')]}>
        {label}
      </ResponsiveUi.Text>

      <TextInput
        {...props}
        style={[
          tailwind('h-12 w-12'),
          {
            color: COLORS.accent500,
          },
          props.style,
        ]}
        maxLength={2}
        keyboardType="number-pad"
        placeholderTextColor={COLORS.accent500}
      />
    </MainContainerWrapper>
  );
};
export default TextInputComponent;
