import React from 'react';
import {View} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CalculatorContainer = ({children}: Props) => {
  return <View>{children}</View>;
};
