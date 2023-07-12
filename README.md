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

- Crea un fichero `CalculatorScreen.tsx` en la carpeta `screens`.

- Crea un componente funcional que renderice un `View` con un `Text` que muestre el número que se está introduciendo en la calculadora.

- Crea los estilos de `CalculatorScreen` en un nuevo fichero llamado `CalculatorScreen.styles.ts` dentro la carpeta `theme`.

- Crea un objeto `StyleSheet` con los estilos que utilizaras en el componente `CalculatorScreen`.

- Importa los estilos en el fichero `CalculatorScreen.tsx` y utilizalos.

- Importa `CalculatorScreen.tsx` en el fichero `App.tsx` y renderízalo.

### Iteration 3: Crear contenedor de los botones de nuestra calculadora

- Crea el contenedor de la calculadora.

- Crea un fichero `CalculatorContainer.tsx` en la carpeta `components`, dentro crear un componente funcional que renderice un `View` con un `children` para renderizar el contenido que le pasemos por props.

\*\* No te olvides de tipar el componente con TypeScript.

- Crea los estilos del contenedor.

- Importa `CalculatorContainer` en el fichero `CalculatorScreen.tsx` y renderizalo debajo del `Text` que hemos creado anteriormente.

### Iteration 4: Crear los botones de nuestra calculadora

- Crea los botones de la calculadora.

- Crea un fichero `CalculatorButton.tsx` en la carpeta `components`.

- Dentro de `CalculatorButton` crea un componente funcional que renderice un `TouchableOpacity` con un `Text` que muestre el texto que le pasemos por props.

- El componente `CalculatorButton` debe recibir el texto que se va a mostrar en el botón como `children`.

- El componente `CalculatorButton` debe recibir el color del botón como `color`.

- El componente `CalculatorButton` debe recibir el color del texto como `colorText`.

- El componente `CalculatorButton` debe recibir el tamaño del texto como `size`.

- El componente `CalculatorButton` debe recibir la función que se ejecutará cuando pulsemos el botón como `onPress`.

\*\* No olvides darle el tipo a las props del componente.

- Tip: puedes utilizar condicionales para establecer el ancho del botón o el color del texto.

- Importa el botón en el fichero `CalculatorScreen.tsx` y renderizalo dentro del `CalculatorContainer`.

- No te olvides de pasarle las props que necesita el componente.

- Coloca los botones en el orden que aparecen en la imagen de la calculadora, así como los colores que aparecen en la imagen.

* Tip: puedes utilizar el styles.containerButtons para darle estilos al `View` que contiene los botones.

### Iteration 5: Crear el custom hook de nuestra calculadora, para manejar el estado de nuestra aplicación

- Crea un custom hook para manejar el estado y metodos de la calculadora

- Crea un fichero `useCalculator.ts` en la carpeta `hooks`

- Crea un custom hook que devuelva el estado de la aplicación y las funciones para manejarlo.

\*\* Puedes utilizar useState, useRef o cualquier otro hook que necesites.

- Importa y utiliza el custom hook en el fichero `CalculatorScreen.tsx`

- Crea la función para limpiar la calculadora

- Crea la función para añadir un número o punto a la calculadora

- Crea la función para cambiar el signo del número de la calculadora

- Crea la función para borrar el último número de la calculadora

- Crea la función para realizar una operación

- Crea la función para dividir el número de la calculadora

- Crea la función para multiplicar el número de la calculadora

- Crea la función para restar el número de la calculadora

- Crea la función para sumar el número de la calculadora

- Utiliza las funciones que acabas de crear en los botones de la calculadora

## Bonus

### Bonus 1: Crear una interface para tipar el custom hook de nuestra calculadora

### Bonus 2: Agregar un estado para manejar el número anterior de la calculadora

Happy coding! 💙
