import React from 'react';
import {ImageBackground, View, ScrollView} from 'react-native';
import {ContainerProps} from '../typings/Main';
import {backgroundGame} from '../assets';
import {useTailwind} from 'tailwind-rn/dist';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundWrapper: React.FC<ContainerProps> = props => {
  const tailwind = useTailwind();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[tailwind('flex-1')]}>
      <LinearGradient
        colors={['#4e0329', '#ddb52f']}
        style={[tailwind('flex-1')]}>
        <ImageBackground
          source={backgroundGame}
          resizeMode={'cover'}
          style={props.style}
          imageStyle={{opacity: 0.15}}>
          <View style={props.style}>{props.children}</View>
        </ImageBackground>
      </LinearGradient>
    </ScrollView>
  );
};
export default BackgroundWrapper;
