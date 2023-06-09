import React from 'react';
import {View} from 'react-native';
import {ContainerProps} from '../typings/Main';

const MainContainerWrapper: React.FC<ContainerProps> = props => {
  return <View style={props.style}>{props.children}</View>;
};
export default MainContainerWrapper;
