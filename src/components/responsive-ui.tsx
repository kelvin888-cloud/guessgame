import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Style, useTailwind} from 'tailwind-rn';
import {useAppDimensions} from '../hooks/dimensions';
import {
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  View,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {dropShadow} from '../helper/drop-shadow';

export interface ResponsiveUiTextProps extends TextProps {
  // TEXT
  xl?: string | boolean;
  h1?: string | boolean;
  h2?: string | boolean;
  h3?: string | boolean;
  h4?: string | boolean;
  h5?: string | boolean;
  h6?: string | boolean;
  h7?: string | boolean;
  paragraph?: string | boolean;
  span?: string | boolean;
  subText?: string | boolean;
  fontSize?: number;
  // TEXT COLOR
  textWhite?: string | boolean;
  darkText?: string | boolean;
  color?: string | boolean;
  link?: string | boolean;
  // TEXT STYLE
  bold?: string | boolean;
  semiBold?: string | boolean;
  regular?: string | boolean;
  italic?: string | boolean;
  robotoMedium?: string | boolean;
  center?: string | boolean;
  // CUSTOM TAILWIND
  tailwind?: string;
  // UTILS
  postPreview?: boolean;
  containerStyle?: string;
}

export interface ResponsiveUiButtonProps extends ResponsiveUiTextProps {
  title?: string;
  style?: {};
  titleStyle?: TextStyle;
  backgroundColor?: string;
  disabled?: boolean;
  gradient?: boolean;
  colors?: string[];
  loading?: boolean;
  displayIcon?: boolean;
  nameIcon?: string | undefined;
  action: () => void | undefined;
}

interface GradientTextProps extends ResponsiveUiTextProps {
  colors: string[];

  [x: string]: any;
}

const processTextStyles = (
  props: ResponsiveUiTextProps,
  tailwind: {(_classNames: string): Style},
  wp: any,
): TextStyle | any => {
  return {
    // DEFAULT COLOR AND FONT
    ...tailwind('text-text font-regular'),
    ...{fontSize: wp(3.8)},
    // FONT SIZE
    ...(props.xl && {fontSize: wp(7)}),
    ...(props.h1 && {fontSize: wp(6.5)}), //font-size: 24px;
    ...(props.h2 && {fontSize: wp(6)}),
    ...(props.h3 && {fontSize: wp(5.5)}),
    ...(props.h4 && {fontSize: wp(5)}),
    ...(props.h5 && {fontSize: wp(4.5)}), //font-size: 16px;
    ...(props.h6 && {fontSize: wp(4)}), //font-size : 14px
    ...(props.h7 && {fontSize: wp(3.5)}), //font-size : 12px
    ...(props.paragraph && {fontSize: wp(3.5)}),
    ...(props.span && {fontSize: wp(3.2)}),
    ...(props.subText && {fontSize: wp(3), lineHeight: wp(4.5)}),
    ...(props.fontSize && {fontSize: props.fontSize}),
    // COLOR
    ...(props.textWhite && tailwind('text-white')),
    ...(props.darkText && tailwind('text-text-dark')),
    ...(props.link && tailwind('text-primary')),
    ...(props.color && {color: props.color}),
    // STYLE
    ...(props.bold && tailwind('font-bold')),
    ...(props.semiBold && tailwind('font-semi-bold')),
    ...(props.regular && tailwind('font-regular')),
    ...(props.italic && tailwind('font-italic')),
    ...(props.center && tailwind('text-center')),
    // CUSTOM TAILWIND
    ...(props.tailwind && tailwind(props.tailwind)),
  };
};

export const ResponsiveUi = {
  Text: (props: ResponsiveUiTextProps) => {
    const tailwind = useTailwind();
    const {wp} = useAppDimensions();

    return (
      <Text
        {...props}
        style={[processTextStyles(props, tailwind, wp), props.style]}>
        {props.children}
      </Text>
    );
  },

  Button: ({
    disabled,
    style,
    title,
    backgroundColor,
    gradient = false,
    nameIcon,
    displayIcon,
    loading,
    action,
    colors = [],
    ...rest
  }: ResponsiveUiButtonProps) => {
    const tailwind = useTailwind();

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          disabled ? null : action(), Keyboard.dismiss();
        }}
        style={[
          tailwind('items-center mb-2'),
          {
            shadowColor: COLORS.BLACK,
          },
          dropShadow['2x'],
          style,
          backgroundColor && {backgroundColor},
          disabled && tailwind('bg-gray-500'),
        ]}>
        <View style={tailwind('flex-row justify-center items-center')}>
          {gradient ? (
            <ResponsiveUi.GradientText center regular colors={colors} {...rest}>
              {loading ? (
                <ActivityIndicator
                  size={30}
                  color={COLORS.WHITE}
                  style={{margin: 2}}
                />
              ) : displayIcon ? (
                <Ionicons name={nameIcon ?? ''} size={24} color="white" /> // Use default value when nameIcon is undefined
              ) : (
                <ResponsiveUi.Text textWhite regular h5>
                  {title}
                </ResponsiveUi.Text>
              )}
            </ResponsiveUi.GradientText>
          ) : // Handle case when displayIcon is true
          displayIcon ? (
            <Ionicons name={nameIcon ?? ''} size={24} color="white" /> // Use default value when nameIcon is undefined
          ) : (
            <ResponsiveUi.Text textWhite center bold {...rest}>
              {title}
            </ResponsiveUi.Text>
          )}
        </View>
      </TouchableOpacity>
    );
  },

  GradientText: ({colors, ...rest}: GradientTextProps) => {
    const tailwind = useTailwind();
    return (
      <LinearGradient
        colors={colors}
        style={[
          tailwind('w-11/12 h-12 items-center justify-center rounded-xl'),
        ]}>
        <ResponsiveUi.Text
          {...rest}
          style={[rest.style, tailwind('text-white font-bold')]}>
          {rest.children}
        </ResponsiveUi.Text>
      </LinearGradient>
    );
  },
};
