import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

interface ExtraInputProps {
  label: ReactNode;
}

export type InputProps = TextInputProps & ExtraInputProps;
