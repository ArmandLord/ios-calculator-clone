![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - iOS Calculator Clone

## Learning Objectives :notebook:

By the end of this lab, you will be able to:

- Utilize the basic components of React Native.
- Create custom styles with StyleSheet.
- Manage the state of our application with useState.
- Create a custom hook to handle the logic of our calculator and make it reusable.
- Use TypeScript to type our application, whether it's the props of our components, the state of our application, or the parameters and return value of our custom hooks.

## Introducción

In this exercise, we will create a calculator for iOS using React Native. To do this, we will use the basic components of React Native, such as View, Text, or TouchableOpacity, and we will create custom styles with StyleSheet. In addition, we will use TypeScript to type our application, whether it's the props of our components, the state of our application, or the parameters and return value of our custom hooks.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the Node version specified in the `.nvmrc` file.

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

- Create a Pull Request so your TAs can check your work.

## Example

This is an example of how the calculator we are going to create should look like:

![Calculator](./assets/calculator.GIF)

## Iterations

### Iteration 1: Create the basic structure of the application

The first thing we are going to do is create the folder and file structure of our application. To do this, we will create an `src` folder at the root of our project, and inside it, we will create the following folders:

- `components`: In this folder, we will create all the components that we are going to use in our application.

- `hooks`: In this folder, we will create all the custom hooks that we are going to use in our application.

- `screens`: In this folder, we will create all the screens that we are going to use in our application.

- `theme`: In this folder, we will create all the styles that we are going to use in our application.

### Iteration 2: Create the screen for our calculator

- Create a file `CalculatorScreen.tsx` in the `screens` folder.

- Create a functional component that renders a `View` with a `Text` displaying the number being entered in the calculator.

- Create the styles for `CalculatorScreen` in a new file called `CalculatorScreen.styles.ts` inside the `theme` folder.

- Create a `StyleSheet` object with the styles to be used in the `CalculatorScreen` component.

- Import the styles in the `CalculatorScreen.tsx` file and use them.

- Import `CalculatorScreen.tsx` in the `App.tsx` file and render it.

### Iteration 3: Create the container for the buttons of our calculator

- Create the calculator container.

- Create a file `CalculatorContainer.tsx` in the `components` folder. Inside it, create a functional component that renders a `View` with a `children` prop to render the content passed to it as props.

\*\* Don't forget to type the component with TypeScript.

- Create the styles for the container.

- Import `CalculatorContainer` in the `CalculatorScreen.tsx` file and render it below the `Text` component we created earlier.

### Iteration 4: Create the buttons for our calculator

- Create the calculator buttons.

- Create a file `CalculatorButton.tsx` in the `components` folder.

- Inside `CalculatorButton`, create a functional component that renders a `TouchableOpacity` with a `Text` displaying the text passed as props.

- The `CalculatorButton` component should receive the text to be displayed on the button as `children`.

- The `CalculatorButton` component should receive the button color as `color`.

- The `CalculatorButton` component should receive the text color as `colorText`.

- The `CalculatorButton` component should receive the text size as `size`.

- The `CalculatorButton` component should receive the function to be executed when the button is pressed as `onPress`.

> Don't forget to type the props of the component.

- Tip: You can use conditionals to set the button width or the text color.

- Import the button in the `CalculatorScreen.tsx` file and render it inside the `CalculatorContainer`.

- Don't forget to pass the necessary props to the component.

- Arrange the buttons in the order they appear in the calculator image, as well as the colors shown in the image.

* Tip: You can use `styles.containerButtons` to style the `View` that contains the buttons.

### Iteration 5: Create the custom hook for our calculator to handle the state of our application

- Create a custom hook to handle the state and methods of the calculator.

- Create a file `useCalculator.ts` in the `hooks` folder.

- Create a custom hook that returns the state of the application and the functions to handle it.

> You can use useState, useRef, or any other hook you need.

- Import and use the custom hook in the `CalculatorScreen.tsx` file.

- Create the function to clear the calculator.

- Create the function to add a number or decimal point to the calculator.

- Create the function to change the sign of the number in the calculator.

- Create the function to delete the last number in the calculator.

- Create the function to perform an operation.

- Create the function to divide the number in the calculator.

- Create the function to multiply the number in the calculator.

- Create the function to subtract the number in the calculator.

- Create the function to add the number in the calculator.

- Use the functions you just created in the calculator buttons.

## Bonus

### Bonus 1: Create an interface to type the custom hook of our calculator.

### Bonus 2: Add a state to handle the previous number in the calculator.

Happy coding! 💙