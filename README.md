![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - iOS Calculator Clone

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Utilizar los componentes básicos de React Native.
- Crear estilos personalizados con StyleSheet.
- Manejar el estado de nuestra aplicación con useState.
- Crear un custom hook para manejar la lógica de nuestra calculadora y hacerla reutilizable.
- Utilizar TypeScript para tipar nuestra aplicación, ya sean las props de nuestros componentes, el estado de nuestra aplicación o los parámetros y el valor de retorno de nuestros custom hooks.

## Introduction

En este ejercicio vamos a crear una calculadora para iOS utilizando React Native. Para ello, vamos a utilizar los componentes básicos de React Native, como View, Text o TouchableOpacity, y vamos a crear estilos personalizados con StyleSheet. Además, vamos a utilizar TypeScript para tipar nuestra aplicación, ya sean las props de nuestros componentes, el estado de nuestra aplicación o los parámetros y el valor de retorno de nuestros custom hooks.

## Requirements

- Fork this repo.
- Clone this repo.
- Ejecutar `nvm use` para utilizar la versión de Node que se indica en el fichero `.nvmrc`.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Example

Este es un ejemplo de cómo debería verse la calculadora que vamos a crear:

![Calculator](./assets/calculator.GIF)

## Instructions

### Iteration 1: Crear la estructura básica de la aplicación

Lo primero que vamos a hacer es crear la estructura de carpetas y ficheros de nuestra aplicación. Para ello, vamos a crear una carpeta `src` en la raíz de nuestro proyecto, y dentro de ella vamos a crear las siguientes carpetas:

- `components`: en esta carpeta vamos a crear todos los componentes que vamos a utilizar en nuestra aplicación.

- `hooks`: en esta carpeta vamos a crear todos los custom hooks que vamos a utilizar en nuestra aplicación.

- `screens`: en esta carpeta vamos a crear todas las pantallas que vamos a utilizar en nuestra aplicación.

- `theme`: en esta carpeta vamos a crear todos los estilos que vamos a utilizar en nuestra aplicación.

### Iteration 2: Crear el screen de nuestra calculadora

- Crear el screen de nuestra calculadora. Para ello, vamos a crear un fichero `CalculatorScreen.tsx` en la carpeta `screens`, y vamos a crear un componente funcional que renderice un `View` con un `Text` que muestre el número que se está introduciendo en la calculadora.

```tsx
import React from 'react';
import {View, Text} from 'react-native';

export const CalculatorScreen = () => {
  return (
    <View>
      <Text>100</Text>
    </View>
  );
};
```

- Crear los estilos de nuestro screen. Para ello, vamos a crear un fichero `CalculatorScreen.styles.ts` en la carpeta `theme`, y vamos a crear un objeto `StyleSheet` con los estilos de nuestro screen. Puedes utilizar el siguiente código como ejemplo:

```tsx
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...
  },
  result: {
    ...
  },
});
```

- Importar los estilos de nuestro screen en el fichero `CalculatorScreen.tsx` y se los vamos a pasar al `View` que hemos creado.

```tsx
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';

export const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>100</Text>
    </View>
  );
};
```

- Importar nuestro screen en el fichero `App.tsx` y vamos a renderizarlo.

```tsx
import React from 'react';
import {CalculatorScreen} from './src/screens/CalculatorScreen';

const App = () => {
  return <CalculatorScreen />;
};

export default App;
```

### Iteration 3: Crear contenedor de los botones de nuestra calculadora

- Crear el contenedor de nuestra calculadora y los botones que vamos a utilizar para realizar las operaciones. Para ello, vamos a crear un fichero `CalculatorContainer.tsx` en la carpeta `components`, y vamos a crear un componente funcional que renderice un `View` con un `children` para renderizar el contenido que le pasemos por props.

* No te olvides de tipar el componente con TypeScript.

```tsx
import React from 'react';
import {View} from 'react-native';

interface Props {
  ...
}

export const CalculatorContainer = ({children}: Props) => {
  return (
    ...
  )
};
```

Ahora, vamos a crear los estilos de nuestro contenedor. Para ello, en el fichero `CalculatorScreen.styles.ts`, creamos una nueva propiedad `containerButtons` con los estilos de nuestro contenedor.

```tsx
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...
  },
  result: {
    ...
  },
  containerButtons: {
    ...
  },
});
```

Por último, vamos a importar nuestro contenedor en el fichero `CalculatorScreen.tsx` y vamos a renderizarlo debajo del `Text` que hemos creado anteriormente.

### Iteration 4: Crear los botones de nuestra calculadora

Lo siguiente que vamos a hacer es crear los botones de nuestra calculadora. Para ello, vamos a crear un fichero `CalculatorButton.tsx` en la carpeta `components`, y vamos a crear un componente funcional que renderice un `TouchableOpacity` con un `Text` que muestre el texto que le pasemos por props.

También necesitaremos pasarle props como el color del botón, el ancho del botón y la función que se ejecutará cuando pulsemos el botón.

- No olvides darle el tipo a las props del componente.

* Tip: puedes utilizar condicionales para establecer el ancho del botón o el color del texto.

```tsx
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  children: ...;
  color: ...;
  colorText: ...;
  size: ...;
  onPress: ...;
}

export const CalculatorButton = ({
  children,
  color,
  colorText,
  size,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
```

- Importar nuestro botón en el fichero `CalculatorScreen.tsx` y renderizarlo dentro del `CalculatorContainer`.
- No te olvides de pasarle las props que necesita el componente.
- Coloca los botones en el orden que aparecen en la imagen de la calculadora, así como los colores que aparecen en la imagen.

* Tip: puedes utilizar el styles.containerButtons para darle estilos al `View` que contiene los botones.

```tsx
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import {CalculatorContainer} from '../components/CalculatorContainer';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>100</Text>
      <CalculatorContainer>
        <View style={styles.containerButtons}>{/*Buttons*/}</View>
      </CalculatorContainer>
    </View>
  );
};
```

### Iteration 5: Crear el custom hook de nuestra calculadora, para manejar el estado de nuestra aplicación

Lo siguiente que vamos a hacer es crear el custom hook de nuestra calculadora, para manejar el estado de nuestra aplicación. Para ello, vamos a crear un fichero `useCalculator.ts` en la carpeta `hooks`, y vamos a crear un custom hook que devuelva el estado de nuestra aplicación y las funciones que vamos a utilizar para manejarlo.

Y hagamos el primer método, que es el de limpiar la calculadora. Para ello, vamos a crear una función `clean` que establezca el número actual a `0`.

```tsx
import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const clean = () => {
    ...
  };

  return {
    number,
    clean,
  };
};
```

Ahora vamos a utilizar este custom hook en el fichero `CalculatorScreen.tsx`. Para ello, vamos a importar el custom hook que acabamos de crear, y vamos a utilizarlo para obtener el número actual de la calculadora y la función para limpiar la calculadora.

```tsx
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import {CalculatorContainer} from '../components/CalculatorContainer';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {number, clean} = useCalculator();

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{number}</Text>
      <CalculatorContainer>
        <CalculatorButton color="#9B9B9B" colorText="#000" onPress={clean}>
          AC
        </CalculatorButton>
        ...
      </CalculatorContainer>
    </View>
  );
};
```

### Iteration 6: Dentro del custom hook, crear la función para añadir un número a la calculadora (addNumber)

### Iteration 7: Dentro del custom hook, crear la función para cambiar el signo del número de la calculadora (changeSign)

### Iteration 8: Dentro del custom hook, crear la función para borrar el último número de la calculadora (deleteNumber)

### Iteration 9: Dentro del custom hook, crear la función para realizar una operación (calculate)

### Iteration 10: Dentro del custom hook, crear la función para dividir el número de la calculadora (divide)

### Iteration 11: Dentro del custom hook, crear la función para multiplicar el número de la calculadora (multiply)

### Iteration 12: Dentro del custom hook, crear la función para restar el número de la calculadora (subtract)

### Iteration 13: Dentro del custom hook, crear la función para sumar el número de la calculadora (add)

## Bonus

### Bonus 1: Crear una interface para tipar el custom hook de nuestra calculadora

### Bonus 2: Agregar un estado para manejar el número anterior de la calculadora

Happy coding! 💙
