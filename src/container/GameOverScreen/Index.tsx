import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {RootStackScreenProps} from '../../typings/navigation';
import {SCREENS} from '../../constants/screens';
import MainContainerWrapper from '../../components/MainWrapper';
import {useTailwind} from 'tailwind-rn';
import {COLORS} from '../../constants/colors';
import {ResponsiveUi} from '../../components/responsive-ui';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import FastImage from 'react-native-fast-image';
import {success} from '../../assets';

const IndexGameOverScreen = ({
  navigation,
  route,
}: RootStackScreenProps<SCREENS.OVER>) => {
  const tailwind = useTailwind();
  const {roundsOfGame, chosenNumber}: any = route.params;

  const handleGameOverNav = () => {
    navigation.navigate(SCREENS.MAIN);
  };

  return (
    <SafeAreaView style={[tailwind('flex-1')]}>
      <BackgroundWrapper
        style={[tailwind('flex-1 justify-center items-center')]}>
        <MainContainerWrapper style={[tailwind('flex-1 mt-24 ml-5 mr-5')]}>
          <MainContainerWrapper
            style={[tailwind('border-2 border-white ml-7 mr-7 p-3')]}>
            <ResponsiveUi.Text
              h1
              regular
              color={COLORS.WHITE}
              style={[tailwind('text-center')]}>
              Game Over
            </ResponsiveUi.Text>
          </MainContainerWrapper>
          <MainContainerWrapper
            style={[
              tailwind('w-52 h-52 mx-9 mt-10 border-2'),
              {
                borderColor: COLORS.primary800,
                overflow: 'hidden',
                borderRadius: 104,
              },
            ]}>
            <FastImage
              source={success}
              style={[tailwind('w-full h-full')]}
              resizeMode={FastImage.resizeMode.cover}
            />
          </MainContainerWrapper>

          <MainContainerWrapper
            style={[tailwind('mr-5 ml-5 mb-5 justify-center items-center')]}>
            <ResponsiveUi.Text
              h3
              bold
              color={COLORS.BLACK}
              style={[tailwind('text-center')]}>
              Your phone needed
              <ResponsiveUi.Text
                h2
                bold
                style={{
                  color: COLORS.primary500,
                }}>
                {roundsOfGame}
              </ResponsiveUi.Text>
              rounds to guess the number
              <ResponsiveUi.Text
                h2
                bold
                style={{
                  color: COLORS.primary500,
                }}>
                {chosenNumber}
              </ResponsiveUi.Text>
            </ResponsiveUi.Text>
          </MainContainerWrapper>
          <View style={[tailwind('flex-1')]}>
            <ResponsiveUi.Button
              regular
              gradient={true}
              displayIcon={false}
              title={'Start New Game'}
              colors={[COLORS.PRIMARY_ALTERNATIVE, COLORS.primary500]}
              style={[tailwind('w-full top-3 mb-3')]}
              action={() => handleGameOverNav()}
            />
          </View>
        </MainContainerWrapper>
      </BackgroundWrapper>
    </SafeAreaView>
  );
};

export default IndexGameOverScreen;
