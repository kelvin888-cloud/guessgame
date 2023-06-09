import React from 'react';
import {GuessNumProps} from '../typings/GuessNum';
import {COLORS} from '../constants/colors';
import {ResponsiveUi} from './responsive-ui';
import MainContainerWrapper from './MainWrapper';
import {useTailwind} from 'tailwind-rn';

const NumberContainer: React.FC<GuessNumProps> = props => {
  const tailwind = useTailwind();
  return (
    <MainContainerWrapper
      style={[
        tailwind('border-4 p-6 m-6 rounded-lg items-center justify-center'),
        {borderColor: COLORS.accent500},
      ]}>
      <ResponsiveUi.Text bold style={[{color: COLORS.accent500, fontSize: 36}]}>
        {props.GuessNumber}
      </ResponsiveUi.Text>
    </MainContainerWrapper>
  );
};

export default NumberContainer;
