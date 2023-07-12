import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import {CalculatorContainer} from '../components/CalculatorContainer';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {clean, number} = useCalculator();
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{number}</Text>
      <CalculatorContainer>
        <View style={styles.containerButtons}>
          <CalculatorButton color="#9B9B9B" colorText="#000" onPress={clean}>
            AC
          </CalculatorButton>
          <CalculatorButton
            color="#9B9B9B"
            colorText="#000"
            onPress={() => console.log('positiveNegative')}>
            +/-
          </CalculatorButton>
          <CalculatorButton
            color="#9B9B9B"
            colorText="#000"
            onPress={() => console.log('deletedNumer')}>
            del
          </CalculatorButton>
          <CalculatorButton
            color="#FF9427"
            colorText="#fff"
            onPress={() => console.log('btnDivision')}>
            ÷
          </CalculatorButton>
        </View>
        <View style={styles.containerButtons}>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('7')}>
            7
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('8')}>
            8
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('9')}>
            9
          </CalculatorButton>
          <CalculatorButton
            color="#FF9427"
            colorText="#fff"
            onPress={() => console.log('btnMultiplication')}>
            x
          </CalculatorButton>
        </View>
        <View style={styles.containerButtons}>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('4')}>
            4
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('5')}>
            5
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('6')}>
            6
          </CalculatorButton>
          <CalculatorButton
            color="#FF9427"
            colorText="#fff"
            onPress={() => console.log('btnSubtraction')}>
            -
          </CalculatorButton>
        </View>
        <View style={styles.containerButtons}>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('1')}>
            1
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('2')}>
            2
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('3')}>
            3
          </CalculatorButton>
          <CalculatorButton
            color="#FF9427"
            colorText="#fff"
            onPress={() => console.log('btnAddition')}>
            +
          </CalculatorButton>
        </View>
        <View style={styles.containerButtons}>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('0')}
            size>
            0
          </CalculatorButton>
          <CalculatorButton
            color="#2D2D2D"
            colorText="#fff"
            onPress={() => console.log('.')}>
            .
          </CalculatorButton>
          <CalculatorButton
            color="#FF9427"
            colorText="#fff"
            onPress={() => console.log('calculate')}>
            =
          </CalculatorButton>
        </View>
      </CalculatorContainer>
    </View>
  );
};
