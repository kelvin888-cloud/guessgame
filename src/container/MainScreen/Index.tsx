import React, {useState} from 'react';
import {Alert, View, SafeAreaView} from 'react-native';
import {RootStackScreenProps} from '../../typings/navigation';
import {SCREENS} from '../../constants/screens';
import MainContainerWrapper from '../../components/MainWrapper';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../../constants/colors';
import {ResponsiveUi} from '../../components/responsive-ui';
import {dropShadow} from '../../helper/drop-shadow';
import TextInputComponent from '../../components/TextInputComponent';
import BackgroundWrapper from '../../components/BackgroundWrapper';

const IndexMainScreen = ({navigation}: RootStackScreenProps<SCREENS.MAIN>) => {
  const tailwind = useTailwind();
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputNumber = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputEntered = () => {
    setEnteredNumber('');
  };

  const confirmValueEntered = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => resetInputEntered(),
          },
        ],
      );
      return;
    }
    navigation.navigate(SCREENS.START, {chosenNumber: chosenNumber} as {
      chosenNumber: number;
    });
    setEnteredNumber('');
  };

  return (
    <SafeAreaView style={[tailwind('flex-1')]}>
      <BackgroundWrapper style={[tailwind('flex-1')]}>
        <MainContainerWrapper style={[tailwind('flex-1 mt-24 ml-5 mr-5')]}>
          <MainContainerWrapper
            style={[tailwind('border-2 border-white ml-7 mr-7 p-3')]}>
            <ResponsiveUi.Text
              h1
              regular
              color={COLORS.WHITE}
              style={[tailwind('text-center')]}>
              Guess My Number
            </ResponsiveUi.Text>
          </MainContainerWrapper>
          <MainContainerWrapper
            style={[
              tailwind(
                'p-4 rounded-lg ml-1 mr-1 mt-9 justify-center items-center',
              ),
              {
                backgroundColor: COLORS.primary800,
              },
              dropShadow['1x'],
            ]}>
            <TextInputComponent
              label={'Enter a Number'}
              value={enteredNumber}
              onChangeText={numberInputNumber}
              style={[
                tailwind('border-b-2 font-bold text-center my-2'),
                {
                  borderBottomColor: COLORS.accent500,
                  color: COLORS.accent500,
                  fontSize: 24,
                },
              ]}
            />

            <View style={[tailwind('flex-row mt-5 mb-3')]}>
              <View style={[tailwind('flex-1')]}>
                <ResponsiveUi.Button
                  regular
                  gradient={true}
                  title="Reset"
                  colors={[COLORS.PRIMARY_ALTERNATIVE, COLORS.primary500]}
                  style={[tailwind('w-full top-3 mb-3')]}
                  action={() => {
                    resetInputEntered();
                  }}
                />
              </View>

              <View style={[tailwind('flex-1')]}>
                <ResponsiveUi.Button
                  regular
                  gradient={true}
                  title="Confirm"
                  colors={[COLORS.PRIMARY_ALTERNATIVE, COLORS.primary500]}
                  style={[tailwind('w-full top-3 mb-3')]}
                  action={() => {
                    confirmValueEntered();
                  }}
                />
              </View>
            </View>
          </MainContainerWrapper>
        </MainContainerWrapper>
      </BackgroundWrapper>
    </SafeAreaView>
  );
};

export default IndexMainScreen;
