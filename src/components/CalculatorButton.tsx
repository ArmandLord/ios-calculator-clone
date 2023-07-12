import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  children: React.ReactNode;
  color?: string;
  colorText?: string;
  size?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  children,
  color = '#2D2D2D',
  colorText = '#fff',
  size = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        width: size ? 180 : 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          padding: 10,
          fontSize: 30,
          color: colorText,
          fontWeight: '300',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
