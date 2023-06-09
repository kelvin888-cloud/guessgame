import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import {RootStackScreenProps} from '../../typings/navigation';
import {SCREENS} from '../../constants/screens';
import MainContainerWrapper from '../../components/MainWrapper';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../../constants/colors';
import {ResponsiveUi} from '../../components/responsive-ui';
import {dropShadow} from '../../helper/drop-shadow';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import NumberContainer from '../../components/NumberContainer';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const IndexStartGameScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.START>) => {
  const tailwind = useTailwind();
  const {chosenNumber}: any = route.params;
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      navigation.navigate(SCREENS.OVER, {
        roundsOfGame: guessRound.length,
        chosenNumber: chosenNumber,
      });
    }
  }, [currentGuess, chosenNumber, guessRound.length, navigation]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < chosenNumber) ||
      (direction === 'greater' && currentGuess > chosenNumber)
    ) {
      Alert.alert('Dont lie!', 'You know this is wrong ....', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGuessRound(prevGuessRound => [...prevGuessRound, newRndNumber]);
  }

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
              Opponent's Guess
            </ResponsiveUi.Text>
          </MainContainerWrapper>
          <NumberContainer GuessNumber={currentGuess} />
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
            <ResponsiveUi.Text
              h1
              regular
              style={[
                {
                  color: COLORS.accent500,
                },
              ]}>
              Higher or Lower?
            </ResponsiveUi.Text>

            <View style={[tailwind('flex-row mt-5 mb-3')]}>
              <View style={[tailwind('flex-1')]}>
                <ResponsiveUi.Button
                  regular
                  gradient={true}
                  displayIcon={true}
                  nameIcon={'md-remove'}
                  colors={[COLORS.PRIMARY_ALTERNATIVE, COLORS.primary500]}
                  style={[tailwind('w-full top-3 mb-3')]}
                  action={() => nextGuessHandler('lower')}
                />
              </View>

              <View style={[tailwind('flex-1')]}>
                <ResponsiveUi.Button
                  regular
                  gradient={true}
                  displayIcon={true}
                  nameIcon={'md-add'}
                  colors={[COLORS.PRIMARY_ALTERNATIVE, COLORS.primary500]}
                  style={[tailwind('w-full top-3 mb-3')]}
                  action={() => nextGuessHandler('greater')}
                />
              </View>
            </View>
          </MainContainerWrapper>
        </MainContainerWrapper>
      </BackgroundWrapper>
    </SafeAreaView>
  );
};

export default IndexStartGameScreen;
